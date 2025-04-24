import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const SideBarChirurgie = () => {
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
    axios.get('http://127.0.0.1:8000/chirurgies')
    .then(response=>{
        console.log(response);
        setAnalyses(
            response.data.filter(analyse => {
              const today = new Date();
              const rdvDate = new Date(analyse.date);
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
    // const apiUrl=`http://127.0.0.1:8000/chirurgies/${analyse.id}`;
    // let newChirurgie={
    //     "type":analyse.type,
    //     "chirurgie_date":analyse.date,
    //     "chirurgie_heure":analyse.temps,
    //     "doctor_id":analyse.doctor_id,
    //     "patient_id":analyse.patient_id,
    //     "statut":"complété"
    // }
    // try{
    //     const response=await axios.put(apiUrl,newChirurgie);
    //     console.log('Response:', response);
    // }catch(error){
    //     console.log(error);
    // }
  };
  return (
    <div className="SideBar-programme">
        <div id="add-rendez-vous">
          <NavLink to='/receptionnistes/chirurgies/ajouter' className={({isActive})=>(isActive? 'active-admission-link':'')} >Ajouter</NavLink>
        </div>
        <div id="add-rendez-vous">
          <NavLink to="/receptionnistes/chirurgies"  className={({isActive})=>(isActive? 'active-admission-link':'')} >List</NavLink> 
        </div>
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

export default SideBarChirurgie;
