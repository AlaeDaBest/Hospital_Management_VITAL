import React, { useEffect, useState } from 'react';
import { FaSearch, FaStethoscope, FaUserMd, FaHospitalAlt } from 'react-icons/fa';
import '../../../css/patient-css/medecins.css';
import axios from 'axios';

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [allDoctors, setAllDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/medecins')
      .then((response) => {
        setDoctors(response.data);
        setAllDoctors(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des données :', error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const filtered = allDoctors.filter((doctor) =>
      doctor.nom.toLowerCase().includes(search.toLowerCase())
    );
    setDoctors(filtered);
  }, [search, allDoctors]);

  if (loading) return <div>Chargement...</div>;

  return (
    <div className="container">
      <section className="doctors-intro">
        <div className="left">
          <h2>DOCTORS</h2>
          <p>
            "Explorez notre équipe de médecins qualifiés et expérimentés. Trouvez le professionnel de santé qui vous faut,
            que ce soit pour une consultation générale, un avis spécialisé ou une urgence."
          </p>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Chercher un docteur"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button><FaSearch /></button>
          </div>
          <div className="icons-row">
            <FaStethoscope />
            <FaUserMd />
            <FaHospitalAlt />
          </div>
        </div>
        <div className="right">
          <img src="Images/patient/medicinstop.jpeg" alt="Doctor Consultation" />
        </div>
      </section>

      <section className="specialty-section">
        <h3>Experte en spécialité</h3>
        <p className="quote">
          "Nos médecins experts, spécialisés dans divers domaines, vous offrent des soins de haute précision et un accompagnement personnalisé."
        </p>
        <div className="cards-container">
          {doctors.map((doctor, i) => (
            <div className="medcin-card" key={i}>
              <img
                src={`http://127.0.0.1:8000/storage/photo/${doctor.photo}`}
                alt="Photo du docteur"
                width="100"
              />
              <h4>{doctor.nom}</h4>
              <p>{doctor.specialite}</p>
            </div>
          ))}
        </div>

        <div className="pagination-indicators">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </section>

      <section className="app-section">
        <div className="app-info">
          <h3>Trouvez l’application qui vous convient.</h3>
          <p>Recevez 100% de vos patients grâce à notre application :</p>
          <ul>
            <li>🔄 Organisation facilitée des rendez-vous</li>
            <li>📋 Orientation transparente du patient</li>
            <li>📍 Suivi précis des cas</li>
          </ul>
        </div>
        <div className="app-image">
          <img src="Images/patient/DOCTOR1.jpeg" alt="App use" />
        </div>
      </section>
    </div>
  );
};

export default Doctors;
