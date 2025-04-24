import React from "react";
import Header from "./Header";
import SideMenu from "./SideMenu";
import { CiSquarePlus } from "react-icons/ci";


const Rapport = () => {
  return (
    <div className="rapport-container">
      <Header />
      <SideMenu />

      <nav id="SideBar">
        <div style={{ display: "flex", flexDirection: "column", gap: "15px", margin: "20px 0" }} >
          <button className="add-btn" >
            Ajouter <CiSquarePlus size="20px" />
          </button>
        </div>
      </nav>

      <div className="form-wrapper">
        <form className="rapport-form">
          <div className="row">
            <div className="input-group">
              <label>Nom</label>
              <input type="text" />
            </div>
            <div className="input-group">
              <label>Prénom</label>
              <input type="text" />
            </div>
          </div>

          <div className="row">
            <div className="input-group">
              <label>Type d'opération</label>
              <input type="text" />
            </div>
            <div className="input-group">
              <label>Date / Heure</label>
              <input type="datetime-local" />
            </div>
          </div>

          <div className="row">
            <div className="input-group full-width">
              <label>Notes détaillées</label>
              <textarea rows="4"></textarea>
            </div>
          </div>

          <div className="row">
            <div className="input-group full-width">
              <label>Médecins impliqués</label>
              <input type="text" />
            </div>
          </div>

          <div className="button-row">
            <button type="submit" className="save-btn">Enregistrer</button>
            <button type="button" className="cancel-btn">Annuler</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Rapport;
