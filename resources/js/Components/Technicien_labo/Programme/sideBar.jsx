import React, { useEffect, useState } from "react";
import axios from "axios";

const SideBar = () => {
  const [analyses, setAnalyses] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/tech_labo/programme", { withCredentials: true })
      .then(res => {
        setAnalyses(res.data);
        console.log('data:', res.data);
      })
      .catch(err => {
        console.error("Erreur lors du chargement des analyses :", err);
      });
  }, []);

  const handleRealiser = (analyseId) => {
    setAnalyses(prev => prev.filter(analyse => analyse.id !== analyseId));
  };

  return (
    <div className="SideBar-programme">
      <center><h2 className="titre-analyses">Analyses à réaliser</h2></center>
       <center><p className="compteur-analyses">({analyses.length})</p></center>
      <ul className="liste-analyses">
        {analyses.map(analyse => (
          <li key={analyse.id} className="analyse-item">
            <strong>{analyse.type}</strong><br />
            Patient: {analyse.patient_nom} {analyse.patient_prenom}<br />
            <button onClick={() => handleRealiser(analyse.id)} className="btn-realiser">
              Réaliser
            </button>
          </li>
        ))}
       <center>{analyses.length === 0 &&  <li className="aucune-analyse">Aucune analyse restante</li>}</center> 
      </ul>
    </div>
  );
};

export default SideBar;
