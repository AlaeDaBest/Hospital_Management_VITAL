import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../../css/patient-css/analyse.css';
import {
  FaDownload,
  FaEllipsisV,
  FaChartBar,
  FaHourglassHalf,
  FaCheckCircle,
  FaHeartbeat,
} from 'react-icons/fa';
import Header from '../Receptionniste/Header';
import SideMenu from './SideMenu';

const AnalysisResults = () => {
  const [results, setResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedAnalyse, setSelectedAnalyse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/analyses')
      .then((response) => {
        setResults(response.data);
      })
      .catch((error) => {
        console.error('Erreur lors du chargement des analyses :', error);
      });
  }, []);

  const filteredResults = results.filter((res) => {
    const matchesSearch = res.resultat?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'All' || res.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div>
      <Header/>
      <SideMenu/>
    <div className="container">
      <div className="main-analyse">
        <div className="stats-grid">
          <div className="card">
            <FaChartBar className="card-icon" />
            <p>total d’analyses réalisées</p>
            <h2>{results.length}</h2>
          </div>
          <div className="card">
            <FaHourglassHalf className="card-icon" />
            <p>résultats en attente de validation</p>
            <h2>0</h2>
          </div>
          <div className="card">
            <FaCheckCircle className="card-icon" />
            <p>résultats disponibles</p>
            <h2>{results.length}</h2>
          </div>
          <div className="card">
            <FaHeartbeat className="card-icon" />
            <p>des analyses médicales récentes</p>
            <h2 className="positive">+11.7%</h2>
            <span>{results.length}</span>
          </div>
        </div>
      </div>

      <div className="table-container">
        <div className="table-filters">
          <input
            type="text"
            placeholder="Rechercher par résultat..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
            <option value="All">Type d’analyse: Tous</option>
            <option value="Hématologie">Hématologie</option>
            <option value="Biochimie">Biochimie</option>
            <option value="Immunologie">Immunologie</option>
            <option value="Microbiologie">Microbiologie</option>
            <option value="Pathologie">Pathologie</option>
            <option value="Toxicologie">Toxicologie</option>
            <option value="Virologie">Virologie</option>
          </select>
          <div className="table-actions" style={{ marginBottom: '1rem' }}>
            <div style={{ marginBottom: '15px' }}>
            <a
              href="http://127.0.0.1:8000/analyses/download-all"
              target="_blank"
              rel="noopener noreferrer"
              className="download-all-btn"
            >
                📄 Télécharger toutes les analyses
              </a>
            </div>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>Date de l’analyse</th>
              <th>Type d’analyse</th>
              <th>Technicien</th>
              <th>Résultat</th>
              <th>Détails</th>
            </tr>
          </thead>
          <tbody>
            {filteredResults.map((res, i) => (
              <tr key={i}>
                <td>{res.analyse_date}</td>
                <td>{res.type}</td>
                <td>{res.technicien_labo?.prenom}-{res.technicien_labo?.nom}</td>
                <td>{res.resultat}</td>
                <td className="actions">
                  <button
                    className="details-button"
                    onClick={() => {
                      setSelectedAnalyse(res);
                      setIsModalOpen(true);
                    }}
                  >
                    <FaEllipsisV />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modale Détails */}
      {isModalOpen && selectedAnalyse && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Détails de l’analyse</h2>
            <p><strong>ID:</strong> {selectedAnalyse.id}</p>
            <p><strong>Date:</strong> {selectedAnalyse.analyse_date}</p>
            <p><strong>Type:</strong> {selectedAnalyse.type}</p>
            <p><strong>Technicien:</strong> {selectedAnalyse.technicien_labo?.prenom} {selectedAnalyse.technicien_labo?.nom}</p>
            <p><strong>Résultat:</strong> {selectedAnalyse.resultat}</p>

            <button onClick={() => setIsModalOpen(false)}>Fermer</button>
          </div>
        </div>
      )}
      <br /><br /><br />
    </div>
    </div>
  );
};

export default AnalysisResults;







