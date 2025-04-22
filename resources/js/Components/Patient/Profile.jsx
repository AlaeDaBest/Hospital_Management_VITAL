
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import '../../../css/patient-css/Profile.css'



const Profile = () => {
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

  useEffect(() => {
    const email = "mariam.bakali@example.com"; 

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatient(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    if (photo) formData.append('photo', photo);
    formData.append('nom', patient.nom);
    formData.append('prenom', patient.prenom);
    formData.append('genre', patient.genre);
    formData.append('date_Naissance', patient.date_Naissance);
    formData.append('tel', patient.tel);
    formData.append('email', patient.email);
    formData.append('adresse', patient.adresse);
    formData.append('groupeSanguin', patient.groupeSanguin);
    formData.append('allergie', patient.allergie);
    formData.append('conditions_Medicaux', patient.conditions_Medicaux);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/patients/update-profile', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Upload failed');

      toast.success('✅ Profil mis à jour avec succès');
    } catch (err) {
      toast.error('❌ Erreur lors de la mise à jour');
      console.error(err);
    }
  };

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
    marginTop: "30px",
    width: "300px",
    height: "auto",

  }}
/>
       
      <div className="nav">
        <ul>
          <li><Link to="/compte" className="active">Compte</Link></li>
          <li><Link to="/documents">Documents</Link></li>
          <li><Link to="/adresse-medicale">Adresse Médicale</Link></li>
          <li><Link to="/notification">Notification</Link></li>
        </ul>
      </div>

      <div className="main-content">
      <h2 >Voici vos informations personnelles : {patient.nom}</h2>

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

        <form className="profile-form" onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Nom:</label>
            <input type="text" name="nom" value={patient.nom} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Prénom:</label>
            <input type="text" name="prenom" value={patient.prenom} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Genre:</label>
            <input type="text" name="genre" value={patient.genre} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Date de naissance:</label>
            <input type="text" name="date_Naissance" value={patient.date_Naissance} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Numéro de téléphone:</label>
            <input type="text" name="tel" value={patient.tel} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Adresse email:</label>
            <input type="email" name="email" value={patient.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Adresse:</label>
            <input type="text" name="adresse" value={patient.adresse} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Groupe Sanguin:</label>
            <input type="text" name="groupeSanguin" value={patient.groupeSanguin} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Allergies:</label>
            <input type="text" name="allergie" value={patient.allergie} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Conditions Médicales:</label>
            <input type="text" name="conditions_Medicaux" value={patient.conditions_Medicaux} onChange={handleChange} />
            <input  type="file" name="photo"
               accept="image/*"
              onChange={(e) => setPhoto(e.target.files[0])}
            />
          </div>
          <button type="submit" className="validation-button">Validation</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
