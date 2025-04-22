import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import '../../../css/patient-css/Profile.css';

const ProfileLayout = () => {
  const [patient, setPatient] = useState({
    nom: "",
    prenom: "",
    genre: "",
    date_Naissance: "",
    tel: "",
    email: "",
    adresse: "",
    groupeSanguin: "",
    allergie: "",
    conditions_Medicaux: "",
    photo: ""
  });
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const email = "aminata.diallo@example.com"; 

    axios.get(`http://127.0.0.1:8000/api/patients/profile?email=${email}`)
      .then((response) => {
        setPatient(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erreur de chargement :", error);
        setError("Impossible de charger le profil.");
        setLoading(false);
      });
  }, []);
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
  };

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container">
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
      <div className="nav">
        <ul>
          <li><Link to="/patients/profile" className={location.pathname === "/patients/profile" ? "active" : ""}>Compte</Link></li>
          <li><Link to="/patients/profile/documents" className={location.pathname === "/patients/profile/documents" ? "active" : ""}>Documents</Link></li>
          <li><Link to="/patients/profile/adresse-medicale" className={location.pathname === "/patients/profile/adresse-medicale" ? "active" : ""}>Adresse Médicale</Link></li>
          <li><Link to="/patients/profile/notification" className={location.pathname === "/patients/profile/notification" ? "active" : ""}>Notification</Link></li>
        </ul>
      </div>
      <h2>Bonjour {patient.nom}</h2>

      <div className="main-content">
        <div className="profile-picture-section">
          <div className="profile-picture">
            {patient.photo && (
              <img src={`http://127.0.0.1:8000/${patient.photo}`} alt="Photo de profil" />
            )}
          </div>
          <input
            type="file"
            accept="image/jpeg,image/png"
            onChange={handleImageUpload}
            id="profile-upload"
            style={{ display: "none" }}
          />
          <label htmlFor="profile-upload" className="upload-button">Upload JPG/PNG (Max: 5 MB)</label>
        </div>
        <Outlet context={[patient, setPatient, photo, setPhoto]} />
      </div>
    </div>
  );
};

export default ProfileLayout;