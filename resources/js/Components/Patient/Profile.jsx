import React from "react";
import {Link} from "react-router-dom";
import '../../../css/patient-css/profile.css';
// import Notification from './link-profile/notification';

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
              <img src="Images/patient/DOCTOR1.jpeg" alt="Profile" />
            </div>
            <button>Upload JPG/PNG (Max: 5 MB)</button>
          </div>  

          <div className="profile-form">
          <div className="form-group">
            <label>Nom:</label>
            <input type="text" placeholder="Kairo"  />
          </div>
          <div className="form-group">
            <label>Prénom:</label>
            <input type="text" placeholder="Mist"  />
          </div>
          <div className="form-group">
            <label>CIN:</label>
            <input type="text" placeholder="RA2387"  />
          </div>
          <div className="form-group">
            <label>Date de naissance:</label>
            <input type="text" placeholder="12-09-1976"  />
          </div>
          <div className="form-group">
            <label>Numéro de téléphone:</label>
            <input type="text" placeholder="+212 98-653-4231"  />
          </div>
          <div className="form-group">
            <label>Adresse email:</label>
            <input type="text" placeholder="KairoMist74@gmail.com"  />
          </div>
          <div className="form-group">
            <label>Adresse:</label>
            <input type="text" placeholder="Rabat, Maroc"  />
          </div>
          <button className="validation-button">Validation</button>
          </div>
      </ div> 
    </div>
    
    
    </>
  );
};

export default Profile;
