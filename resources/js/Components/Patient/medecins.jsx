import React from 'react';
import { FaSearch, FaStethoscope, FaUserMd, FaHospitalAlt } from 'react-icons/fa';
import '../../../css/patient-css/medecins.css'; 
const Doctors = () => {
  return (
    <div className="container">
      <section className="doctors-intro">
        <div className="left">
          <h2>DOCTORS</h2>
          <p>
            "Explorez notre équipe de médecins qualifiés et expérimentés. Trouvez le professionnel de santé qui vous faut,
            que ce soit pour une consultation générale, un avis spécialisé ou une urgence. Avec des profils détaillés,
            des avis vérifiés et des disponibilités en temps réel, choisissez le médecin qui correspond à vos besoins
            et prenez rendez-vous en quelques clics."
          </p>
          <div className="search-bar">
            <input type="text" placeholder="chercher doctor" />
            <button><FaSearch /></button>
          </div>
          <div className="icons-row">
            <FaStethoscope />
            <FaUserMd />
            <FaHospitalAlt />
          </div>
        </div>
        <div className="right">
          <img src="Images/patient/DOCTOR1.jpeg" alt="Doctor Consultation" />
        </div>
      </section>

      <section className="specialty-section">
        <h3>Experte en spécialité</h3>
        <p className="quote">
          "Nos médecins experts, spécialisés dans divers domaines, vous offrent des soins de haute précision et un accompagnement personnalisé."
        </p>

        <div className="cards-container">
          {[
            { name: 'Dr. Jhon Doe', specialty: 'Cardiologue', images: 'Images/patient/doctor2.jpeg' },
            { name: 'Dr. Anas Jam', specialty: 'Surgeon',  images: 'Images/patient/doctor4.jpeg'},
            { name: 'Dr. Anas Jam', specialty: 'Surgeon',  images: 'Images/patient/doctor4.jpeg'},
            { name: 'Dr. Mary Joe', specialty: 'Surgeon' , images: 'Images/patient/doctor3.avif'},
            { name: 'Dr. Anas Jam', specialty: 'Surgeon',  images: 'Images/patient/doctor4.jpeg'},
          ].map((doc, i) => (
            <div className="medcin-card" key={i}>
              <img src= {doc.images} alt={doc.name} />
              <h4>{doc.name}</h4>
              <p>{doc.specialty}</p>
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
          <p>
            Recevez 100% patients à vos soins ! Notre application vous simplifie la gestion :
          </p>
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
