import React from "react";

const SideBar = ({ onSave }) => {
  return (
    <div className="SideBar-p">
      <div className="profile-p">
        <img src="Images/patient/DOCTOR1.jpeg" alt="profil" />
      </div>
      <h2 className="name">Imane</h2>
      <button className="logout-btn" onClick={onSave}>Valider</button>
    </div>
  );
};

export default SideBar;
