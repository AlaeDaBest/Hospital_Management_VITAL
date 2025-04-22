import React from "react";


const Infromations_Personnelles = () => {
  return (
    <section className="container-p">
      <div className="Formulaire">
        <h1>Informations personnelles</h1>
        <form className="formulaire-flex">
          <div className="form-row">
            <label>ID</label>
            <input type="text" disabled className="inp" />
          </div>

          <div className="form-row">
            <label>Service</label>
            <select className="inp">
              <option value="Microbiologie">Microbiologie</option>
              <option value="Biochimie">Biochimie</option>
              <option value="Hématologique">Hématologique</option>
            </select>
          </div>

          <div className="form-row">
            <label>Nom</label>
            <input type="text" className="inp" required />
          </div>

          <div className="form-row">
            <label>Prénom</label>
            <input type="text" className="inp" />
          </div>

          <div className="form-row">
            <label>Genre</label>
            <div className="genre-options">
              <input type="radio" name="genre" id="homme" value="homme" />
              <label htmlFor="homme">Homme</label>
              <input type="radio" name="genre" id="femme" value="femme" />
              <label htmlFor="femme">Femme</label>
            </div>
          </div>

          <div className="form-row">
            <label>Date de recrutement</label>
            <input type="text"value="18/6/2021" className="inp"/>
          </div>

          <div className="form-row">
            <label>Email</label>
            <input type="text" className="inp" />
          </div>

          <div className="form-row">
            <label>Téléphone</label>
            <input type="text" className="inp" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Infromations_Personnelles;
