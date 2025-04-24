import React, { useEffect, useState } from "react";
import axios from "axios";

const SideBar = () => {
  const [analyses, setAnalyses] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/tech_labo/programme", { withCredentials: true })
      .then(res => {
        setAnalyses(res.data);
      })
      .catch(err => {
        console.error("Erreur lors du chargement des analyses :", err);
      });
  }, []);

  const handleRealiser =async (analyse) => {
    console.log(analyse);
    setAnalyses(prev => prev.filter(a => a.id !== analyse.id));
    const apiUrl=`http://127.0.0.1:8000/tech_labo/programme/${analyse.id}`;
    let nvanalyse={
        "type":analyse.type,
        "date_RDV":analyse.date_RDV,
        "patient_id":analyse.patient_id,
        "resultat":"complété"
    }
    try{
        const response=await axios.put(apiUrl,nvanalyse);
        console.log('Response:', response);
    }catch(error){
        console.log(error);
    }
    
  };

  return (
    <div className="SideBar-programme">
      <center><h2 className="titre-analyses">Analyses à réaliser</h2></center>
       <center><p className="compteur-analyses">({analyses.length})</p></center>
      <ul className="liste-analyses">
        {analyses.map(analyse => (
          <li key={analyse.id} className="analyse-item">
            <strong>{analyse.type}</strong><br />
            Patient: {analyse.patient_id}<br />
            <button onClick={() => handleRealiser(analyse)} className="btn-realiser">
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
