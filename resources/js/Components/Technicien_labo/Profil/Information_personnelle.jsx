import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Infromations_Personnelles = () => {
  const [technicien, setTechnicien] = useState({
    id: "",
    nom: "",
    prenom: "",
    email: "",
    tel: "",
    date_Naissance: "",
    specialite: "",
    adresse: "",
    date_Recrutement: "",date_Recrutement
  });
  const location=useLocation();
  
  useEffect(() => {
    setTechnicien(location.state?.user);
  },[technicien]);

  return (
    <section className="container-p">
      <div className="Formulaire">
        <h1>Informations personnelles</h1>
        <form className="formulaire-flex">
          <div className="form-row">
            <label>ID</label>
            <input type="text" className="inp" value={technicien.id || ""} disabled />
          </div>

          <div className="form-row">
            <label>Service</label>
            <input type="text" className="inp" value={technicien.specialite || ""} disabled />
          </div>

          <div className="form-row">
            <label>Nom</label>
            <input type="text" className="inp" value={technicien.nom || ""} disabled />
          </div>

          <div className="form-row">
            <label>Prénom</label>
            <input type="text" className="inp" value={technicien.prenom || ""} disabled />
          </div>

          <div className="form-row">
            <label>Date de naissance</label>
            <input type="text" className="inp" value={technicien.date_Naissance || ""} disabled />
          </div>

          <div className="form-row">
            <label>Adresse</label>
            <input type="text" className="inp" value={technicien.adresse || ""} disabled />
          </div>

          <div className="form-row">
            <label>Date de recrutement</label>
            <input type="text" className="inp" value={technicien.date_Recrutement || ""} disabled />
          </div>

          <div className="form-row">
            <label>Email</label>
            <input type="text" className="inp" value={technicien.email || ""} disabled />
          </div>

          <div className="form-row">
            <label>Téléphone</label>
            <input type="text" className="inp" value={technicien.tel || ""} disabled />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Infromations_Personnelles;
