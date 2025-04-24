import React, { useEffect, useState } from "react";
import axios from "axios";

const SideBarProgramme = () => {
  const [analyses, setAnalyses] = useState([]);
  
//   useEffect(() => {
//     axios.get("http://localhost:8000/rendez_vouss")
//       .then(res => {
//         setAnalyses(res.data);
//       })
//       .catch(err => {
//         console.error("Erreur lors du chargement des analyses :", err);
//       });
//   }, []);
useEffect(()=>{
    axios.get('http://127.0.0.1:8000/rendez_vouss')
    .then(response=>{
        console.log(response);
        setAnalyses(
            response.data.filter(analyse => {
              const today = new Date();
              const rdvDate = new Date(analyse.date_RDV);
              return (
                rdvDate.getFullYear() === today.getFullYear() &&
                rdvDate.getMonth() === today.getMonth() &&
                rdvDate.getDate() === today.getDate()
              );
            })
          );
          console.log(analyses)
    })
    
},[]);

  const handleRealiser =async (analyse) => {
    console.log(analyse);
    setAnalyses(prev => prev.filter(a => a.id !== analyse.id));
    const apiUrl=`http://127.0.0.1:8000/rendez_vouss/${analyse.id}`;
    let newRdv={
        "type_RDV":analyse.type_RDV,
        "date_RDV":analyse.date_RDV,
        "temps_RDV":analyse.temps_RDV,
        "doctor_id":analyse.doctor_id,
        "patient_id":analyse.patient_id,
        "statut":"complété"
    }
    try{
        const response=await axios.put(apiUrl,newRdv);
        console.log('Response:', response);
    }catch(error){
        console.log(error);
    }
    
  };

  return (
    <div className="SideBar-programme">
      <center><h2 className="titre-analyses">Rendez-vous à réaliser</h2></center>
       <center><p className="compteur-analyses">({analyses.length})</p></center>
      <ul className="liste-analyses">
        {analyses.map(analyse => (
            <div key={analyse.id} className="file-attente">
          <li  className="analyse-item">
            <strong>{analyse.type_RDV}</strong><br />
            {analyse.patient_nom} {analyse.patient_prenom}<br />
            <button onClick={() => handleRealiser(analyse)} className="btn-realiser">
              Réaliser
            </button>
          </li>
          </div>
        ))}
       <center>{analyses.length === 0 &&  <li className="aucune-analyse">Aucune analyse restante</li>}</center> 
      </ul>
    </div>
  );
};

export default SideBarProgramme;
