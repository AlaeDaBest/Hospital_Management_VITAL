import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SideBar = () => {
  const navigate = useNavigate();

  const handleModifierClick = () => {
    navigate('/tech_profil_modification');
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
    <div className="SideBar-p">
      <h2>John</h2>
      <button onClick={handleModifierClick}>Modifier</button>
      <button onClick={handleLogout}>Déconnexion</button>
    </div>
  );
};

export default SideBar;
