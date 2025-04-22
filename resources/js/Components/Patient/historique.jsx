import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../../css/patient-css/historique.css';

const Historique = () => {
  const [appointments, setAppointments] = useState([]);
  const [filteredAppointments, setFilteredAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('newest');

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/rendez-vous');
        console.log('data', response.data);
        setAppointments(response.data);
        setFilteredAppointments(response.data);
      } catch (err) {
        setError('Échec du chargement des rendez-vous');
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  useEffect(() => {
    const results = appointments.filter(appointment => {
      const searchLower = searchTerm.toLowerCase();
      
      const status = (appointment.statut || appointment.status || '').toLowerCase();
      
      if (status.includes(searchLower)) {
        return true;
      }
      
      return (
        (appointment.rendez_vous_date && appointment.rendez_vous_date.includes(searchTerm)) ||
        (appointment.type && appointment.type.toLowerCase().includes(searchLower)) ||
        (appointment.doctorID && appointment.doctorID.toString().includes(searchLower))
      );
    });

    let sortedResults = [...results];
    if (sortOption === 'newest') {
      sortedResults.sort((a, b) => new Date(b.rendez_vous_date) - new Date(a.rendez_vous_date));
    } else if (sortOption === 'oldest') {
      sortedResults.sort((a, b) => new Date(a.rendez_vous_date) - new Date(a.rendez_vous_date));
    } else if (sortOption === 'today') {
      const today = new Date().toISOString().split('T')[0]; 
      sortedResults.sort((a, b) => {
        if (a.rendez_vous_date === today && b.rendez_vous_date !== today) return -1;
        if (a.rendez_vous_date !== today && b.rendez_vous_date === today) return 1;
        
        return new Date(b.rendez_vous_date) - new Date(a.rendez_vous_date);
      });
    } else if (sortOption === 'this-week') {
      const today = new Date();
      const oneWeekFromNow = new Date();
      oneWeekFromNow.setDate(today.getDate() + 7);
      
      sortedResults.sort((a, b) => {
        const dateA = new Date(a.rendez_vous_date);
        const dateB = new Date(b.rendez_vous_date);
        
        const aInThisWeek = dateA >= today && dateA <= oneWeekFromNow;
        const bInThisWeek = dateB >= today && dateB <= oneWeekFromNow;
        
        if (aInThisWeek && !bInThisWeek) return -1;
        if (!aInThisWeek && bInThisWeek) return 1;
        
        return dateA - dateB;
      });
    }

    setFilteredAppointments(sortedResults);
  }, [searchTerm, sortOption, appointments]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
  };

  const getStatusClass = (appointment) => {
    const status = appointment.statut || appointment.status || '';
    if (status.toLowerCase() === 'confirmé') return 'confirmé';
    if (status.toLowerCase() === 'annulé') return 'annulé';
    return '';
  };

  if (loading) {
    return <div className="loading-container">Chargement des rendez-vous...</div>;
  }

  if (error) {
    return <div className="error-container">{error}</div>;
  }

  return (
    <div className="container">
      <div className="main-historique">
        <div className="header">
          <h2>Historique des Rendez-vous</h2>
          <button className="export-button">Exporter</button>
        </div>
        <div className="controls">
          <input 
            type="text" 
            placeholder="Rechercher par statut, date ou type" 
            className="search-input" 
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <select value={sortOption} onChange={handleSortChange}>
            <option value="newest">Trier par: Plus récent</option>
            <option value="oldest">Trier par: Plus ancien</option>
            <option value="today">Trier par: Aujourd'hui</option>
            <option value="this-week">Trier par: Cette semaine</option>
          </select>
        </div>
        
        {filteredAppointments.length === 0 ? (
          <div className="no-results">Aucun rendez-vous trouvé</div>
        ) : (
          <table className="appointment-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Heure</th>
                <th>Type</th>
                <th>Médecin</th>
                <th>Ordonnance</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredAppointments.map((appt, index) => (
                <tr key={index}>
                  <td>{formatDate(appt.rendez_vous_date)}</td>
                  <td>{appt.rendez_vous_heure}</td>
                  <td>{appt.type || 'N/A'}</td>
                  <td>{appt.doctors?.nom || `ID ${appt.doctorID}`}</td>
                  <td>
                  <a
                    href={`http://127.0.0.1:8000/ordonnance/${appt.patientID}/download`}
                    className="download-button"
                    target="_blank"
                    rel="noopener noreferrer">
                    Télécharger
                  </a>
                  </td>

                  <td>
                    <span className={`status ${getStatusClass(appt)}`}>
                      {appt.statut || appt.status || 'N/A'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Historique;