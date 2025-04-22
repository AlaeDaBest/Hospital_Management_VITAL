import React, { useState } from "react";
import axios from 'axios'; // Ensure axios is imported
import '../../../css/patient-css/rendez_vous.css';
import { ToastContainer, toast } from "react-toastify";

function Rendez_vous() {
  const [TypeRDV, setTypeRDV] = useState('');
  const [DateRDV, setDateRDV] = useState('');
  const [TempsRDV, setTempsRDV] = useState('');
  const [patientID, setPatientID] = useState(1);
  const [Docteur, setDocteur] = useState(1);
  const [Status, setStatus] = useState('programmé');
  const [responseMessage, setResponseMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    let newRendezVous = {
      "type_RDV": TypeRDV,
      "date_RDV": DateRDV,
      "temps_RDV": TempsRDV,
      "doctorID": Docteur,
      "patientID": patientID,
      "statut": Status,
    };
    const apiUrlRendezVous = 'http://127.0.0.1:8000/api/rendez-vous';
    try {
      const response = await axios.post(apiUrlRendezVous, newRendezVous);
      console.log('Response:', response);
      toast.success('✅ Profil mis à jour avec succès');

      setResponseMessage("Rendez-vous enregistré avec succès!");
      setShowMessage(true);
    } catch (error) {
      console.error('Error:', error);
                  toast.error('❌ Erreur lors de la mise à jour');
            
      
      setResponseMessage("Erreur lors de l'enregistrement du rendez-vous.");
      setShowMessage(true);
    }
  };
  const handleCancel = () => {
    setTypeRDV("");
    setDateRDV("");
    setTempsRDV("");
    setDocteur(1);
    setStatus("programmé");
    setResponseMessage("Rendez-vous annulé avec succès!");
    setShowMessage(true);
  };
  return (
    <div className="responsive-wrapper">
      <div className="container">
      <h2 className="titre">Rendez-vous :</h2>

        <div className="main">
          <div className="appointment-form">
            <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        toastStyle={{
          backgroundColor: "#93e7b4",
          color: "#333",
          borderRadius: "10px",
          padding: "12px 16px",
          fontSize: "14px",
          width: "300px",
          height: "auto",
        }}
      />

            <form onSubmit={handleSubmit}>
              <article>
                <label htmlFor="">Type de rendez-vous</label>
                <input type="text" onChange={(e) => setTypeRDV(e.target.value)} />
              </article>
              <article>
                <label htmlFor="">Date de rendez-vous</label>
                <input type="date" onChange={(e) => setDateRDV(e.target.value)} />
              </article>
              <article>
                <label htmlFor="">Temps de rendez-vous</label>
                <input type="time" onChange={(e) => setTempsRDV(e.target.value)} />
              </article>
              <article>
                <label htmlFor="">Docteur</label>
                <select onChange={(e) => setDocteur(e.target.value)}>
                  <option value={1}>docteur1</option>
                  {/* Add more doctors as needed */}
                </select>
              </article>
              <article className="article-status">
  <label htmlFor="">Statut</label>
  <div>
    <label>
      <input
        type="radio"
        value="programmé"
        name="status"
        defaultChecked
        onChange={(e) => setStatus(e.target.value)}
      />
      Programmé
    </label>
    <label>
      <input
        type="radio"
        value="confirmé"
        name="status"
        onChange={(e) => setStatus(e.target.value)}
      />
      Confirmé
    </label>
    <label>
      <input
        type="radio"
        value="complété"
        name="status"
        onChange={(e) => setStatus(e.target.value)}
      />
      Complété
    </label>
    <label>
      <input
        type="radio"
        value="annulé"
        name="status"
        onChange={(e) => setStatus(e.target.value)}
      />
      Annulé
    </label>
  </div>
</article>

              <button type="submit">Enregistrer</button>
              <button type="button" onClick={handleCancel}>Annuler</button>
            </form>
          </div>
          </div>
          {/* Past Sessions Section */}
          <div className="past-sessions">
            <h2>Sessions en cours :</h2>
            {showMessage && <div className="response-message"><h3>{responseMessage}</h3></div>}
            <h2>Session passée</h2>
            <ul>
            <li>12-08-24: Préparation pour une intervention chirurgicale.</li>
            <li>12-08-24: Contrôle du cholestérol et de la glycémie à jeun.</li>
            <li>19-03-24: Douleurs abdominales aiguës et fièvre.</li>
            <li>12-02-24: Douleur thoracique et essoufflement.</li>
          </ul>
             
            </div>
          </div>
        </div>
  );
}
export default Rendez_vous;
