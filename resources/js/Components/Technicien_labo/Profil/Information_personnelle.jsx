import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

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
    date_Recrutement: "",
  });

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Vérifie si l'utilisateur existe dans le state de la location et met à jour l'état.
    if (location.state?.user) {
      setTechnicien(location.state.user);
    } else {
      console.warn("Aucune donnée utilisateur trouvée.");
    }
  }, [location]);

  const handleModifierClick = () => {
    // Utilisation de 'technicien' au lieu de 'user'
    navigate('/tech_profil_modification', { state: { user: technicien } });
  };

  const handleLogout = async () => {
    try {
      await axios.post("http://127.0.0.1:8000/logout", {}, { withCredentials: true });
      navigate("/login");
    } catch (error) {
      console.error("Erreur lors de la déconnexion :", error);
    }
  };

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
            <label>Email</label>
            <input type="text" className="inp" value={technicien.email || ""} disabled />
          </div>

          <div className="form-row">
            <label>Téléphone</label>
            <input type="text" className="inp" value={technicien.tel || ""} disabled />
          </div>
          <div className="form-row">
            <label>Service</label>
            <input type="text" className="inp" value={technicien.specialite || ""} disabled />
          </div>

         

          

          

          <div className="form-row">
            <label>Adresse</label>
            <input type="text" className="inp" value={technicien.adresse || ""} disabled />
          </div>

          <div className="form-row">
            <label>Date de recrutement</label>
            <input type="text" className="inp" value={technicien.date_Recrutement || ""} disabled />
          </div>

        
        </form>

        <div className="SideBar-p">
            <div className="profile-p">
            <img src="Images/patient/DOCTOR1.jpeg" alt="" />
            </div>
          <h2 className="name">{technicien.prenom || "Utilisateur non trouvé"}</h2> {/* Affiche le nom de l'utilisateur */}
          <button onClick={handleModifierClick} className="modifier-btn">Modifier</button>
          <button onClick={handleLogout} className="logout-btn">Déconnexion</button>
        </div>
      </div>
    </section>
  );
};

export default Infromations_Personnelles;
