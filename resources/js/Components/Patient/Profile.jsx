import React from "react";
import '../../css/patient-css/Profile.css';
import {Link} from "react-router-dom";

const Profile = () => {
  return (
    <>

    <div className="container">
      <div className="nav">
        <ul>
          <li><Link to="/compte" className="active">Compte</Link></li>
          <li><Link to="/documents">Documents</Link></li>
          <li><Link to="/adresse-medicale">Adresse Médicale</Link></li>
          <li><Link to="/notification">Notification</Link></li>
        </ul>
    </div>
      <div className="main-content">
          <div className="profile-picture-section">
            <div className="profile-picture">
              <img src="profile-placeholder.jpg" alt="Profile" />
            </div>
            <button>Upload JPG/PNG (Max: 5 MB)</button>
          </div>  
          <div className="profile-form">
          <div className="form-group">
            <label>Nom:</label>
            <input type="text" value="Kairo" readOnly />
          </div>
          <div className="form-group">
            <label>Prénom:</label>
            <input type="text" value="Mist" readOnly />
          </div>
          <div className="form-group">
            <label>CIN:</label>
            <input type="text" value="RA2387" readOnly />
          </div>
          <div className="form-group">
            <label>Date de naissance:</label>
            <input type="text" value="12-09-1976" readOnly />
          </div>
          <div className="form-group">
            <label>Numéro de téléphone:</label>
            <input type="text" value="+212 98-653-4231" readOnly />
          </div>
          <div className="form-group">
            <label>Adresse email:</label>
            <input type="text" value="KairoMist74@gmail.com" readOnly />
          </div>
          <div className="form-group">
            <label>Localisation:</label>
            <input type="text" value="Rabat, Maroc" readOnly />
          </div>
          <button className="validation-button">Validation</button>
          </div>
      </ div> 
    </div>
    
    
    </>
  );
};

export default Profile;
