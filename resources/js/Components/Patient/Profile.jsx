
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import '../../../css/patient-css/Profile.css'
import Header from "../Receptionniste/Header";
import SideMenu from "./SideMenu";



const Profile_P = () => {
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
  const [nom,setNom]=useState("");
  const [prenom,setPrenom]=useState("");
  const [genre,setGenre]=useState("");
  const [date_Naissance,setDateNassance]=useState("");
  const [tel,setTel]=useState("");
  const [email,setEmail]=useState("");
  const [adresse,setAdresse]=useState("");
  const [groupeSanguin,setGroupeSanguin]=useState("");
  const [allergie,setAllergie]=useState("");
  const [conditions_Medicaux,setConditionsMedicaux]=useState("");
  // const [photo,setPhoto]=useState("");


  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const user=JSON.parse(localStorage.getItem("receptionniste"));
  const userInfo=JSON.parse(localStorage.getItem("userinfo"));
  console.log(user);
  useEffect(() => {

    axios.get(`http://127.0.0.1:8000/comptes/${user.id}`)
      .then((response) => {
        console.log('response',response);
        setPatient(response.data.user);
        setNom(response.data.user.nom);
        setPrenom(response.data.user.prenom);
        setEmail(response.data.user.email);
        setGenre(response.data.user.genre);
        setDateNassance(response.data.user.date_Naissance);
        setTel(response.data.user.tel);
        setAdresse(response.data.user.adresse);
        setGroupeSanguin(response.data.info.groupeSanguin);
        setAllergie(response.data.info.allergies);
        setConditionsMedicaux(response.data.info.conditions_Medicaux);
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
      const response = await fetch(`http://127.0.0.1:8000/api/comptes/`, {
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


  return (
    <div>
      <Header title="Profile"/>
      <SideMenu/>
    <div className="container">
       
      <div className="nav">
        <ul>
          <li><Link to="/patients/profile/compte" className="active">Compte</Link></li>
          <li><Link to="/patients/profile/documents">Documents</Link></li>
          <li><Link to="/patients/profile/adresse-medicale">Adresse Médicale</Link></li>
          <li><Link to="/patients/profile/notifications">Notification</Link></li>
        </ul>
      </div>

      <div className="main-content">
      {/* <h2 >Voici vos informations personnelles : {nom}</h2> */}

        <div className="profile-picture-section">
          <div className="profile-picture">
            
              <img src='Images\Home\Logo.png' alt="Photo de profil" />
            
          </div>
          <input
            type="file"
            accept="image/jpeg,image/png"
            onChange={handleImageUpload}
            id="profile-upload"nom
            style={{ display: "none" }}
          />
          <label htmlFor="profile-upload" className="upload-button">Upload JPG/PNG (Max: 5 MB)</label>
        </div>

        <form className="profile-form" onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Nom:</label>
            <input type="text" name="nom" value={nom} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Prénom:</label>
            <input type="text" name="prenom" value={prenom} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Genre:</label>
            <input type="text" name="genre" value={genre} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Date de naissance:</label>
            <input type="text" name="date_Naissance" value={date_Naissance} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Numéro de téléphone:</label>
            <input type="text" name="tel" value={tel} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Adresse email:</label>
            <input type="email" name="email" value={email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Adresse:</label>
            <input type="text" name="adresse" value={adresse} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Groupe Sanguin:</label>
            <input type="text" name="groupeSanguin" value={groupeSanguin} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Allergies:</label>
            <input type="text" name="allergie" value={allergie} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Conditions Médicales:</label>
            <input type="text" name="conditions_Medicaux" value={conditions_Medicaux} onChange={handleChange} />
            <input  type="file" name="photo"
               accept="image/*"
              onChange={(e) => setPhoto(e.target.files[0])}
            />
          </div>
          <button type="submit" className="validation-button">Validation</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Profile_P;
