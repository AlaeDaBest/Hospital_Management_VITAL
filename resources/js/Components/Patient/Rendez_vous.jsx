import React, { useEffect, useState } from "react";
import '../../../css/patient-css/rendez_vous.css';
import Header from "../Receptionniste/Header";
import SideBar from "../Receptionniste/SideBar";
import SideMenu from "./SideMenu";
import axios from "axios";
function Rendez_vous() {
        const [TypeRDV,setTypeRDV]=useState('');
        const [DateRDV,setDateRDV]=useState('');
        const [TempsRDV,setTempsRDV]=useState('');
        const [IDPatient,setIDPatient]=useState('');
        const [Password,setPassword]=useState('');
        const [Docteur,setDocteur]=useState(1);
        // const [TypeRE,setRaisonVisite]=useState('');
        const [Status,setStatus]=useState('programmé');
  const [responseMessage, setResponseMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [doctors,setDoctors]=useState([]);
  const [messageRendez_vous,setMessageRendez_vous]=useState("");
  const [errors,setErrors]=useState("");

  const userInfo=JSON.parse(localStorage.getItem("userInfo"));
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/doctors')
    .then(response => {
      setDoctors(response.data);
      console.log(response);
    });
  },[]);
  const patient=JSON.parse(localStorage.getItem("receptionniste"));
  const AddRendezVous = async () => {

    console.log(patient);
    let newRendezVous={
      "type_RDV":TypeRDV,
      "date_RDV":DateRDV,
      "temps_RDV":TempsRDV,
      "doctorID":Docteur,
      "patientID":userInfo.id,
      "statut":Status
    }
    console.log(newRendezVous);
    const apiUrlRendezVous='http://127.0.0.1:8000/rendez_vouss';
    try{
        const response=await axios.post(apiUrlRendezVous,newRendezVous);
        console.log('Response:', response);
        setMessageRendez_vous(response.data.message);
    }catch(error){
        console.log(error);
    }
    
};
  const handleCancel = () => {
    setType("");
    setDate("");
    setTime("");
    setDoctor("");
    setReason("");
    setStatus("planned");
    setResponseMessage("Appointment canceled successfully!");
  };

  return (
    <div className="responsive-wrapper">
      <Header/>
      <SideMenu/>
        <div className="form-rdv">
                <div className="message" id="message_rdv">
                    <p>{messageRendez_vous}</p>
                </div>
                <section id="Rendez-vous" className="rdv-form" >
                        <h2>Rendez-vous</h2>
                        <div>
                            <article>
                                <label htmlFor="">ID patient</label>
                                <input type="text" name="" value={userInfo.id} onChange={(e)=>setIDPatient(e.target.value)} disabled />
                                {errors.TypeRDV && <div className="error">{errors.TypeRDV[0]}</div>}
                            </article>
                            <article>
                                <label htmlFor="">Type de rendez-vous</label>
                                <input type="text" name="" onChange={(e)=>setTypeRDV(e.target.value)} />
                                {errors.TypeRDV && <div className="error">{errors.TypeRDV[0]}</div>}
                            </article>
                            <article>
                                <label htmlFor="">Date de rendez-vous</label>
                                <input type="date" name="" onChange={(e)=>setDateRDV(e.target.value)} />
                                {errors.DateRDV && <div className="error">{errors.DateRDV[0]}</div>}
                            </article>
                            <article>
                                <label htmlFor="">Temps de rendez-vous</label>
                                <input type="time" name="" onChange={(e)=>setTempsRDV(e.target.value)} />
                            </article>
                        </div>
                        <div>
                            <article>
                                <label htmlFor="">Docteur</label>
                                <select name="docteur" id="" onChange={(e)=>setDocteur(e.target.value)} >
                                    {doctors.map((doctor)=>(
                                        <option key={doctor.id} value={doctor.id}>{doctor.compte.nom} {doctor.compte.prenom}</option>
                                    ))} 
                                </select>
                            </article>
                            {/* <article>
                                <label htmlFor="">Raison de visite</label>
                                <input type="text" name="" onChange={(e)=>setRaisonVisite(e.target.value)} />
                            </article> */}
                            {/* <article>
                                <label htmlFor="">Statut</label> 
                                <div>
                                    <div>
                                        <input type="radio" value="programmé" name="status" id="" defaultChecked onChange={(e)=>setStatus(e.target.value)} />
                                        Programmé
                                        <input type="radio" value="confirmé" name="status" id="" onChange={(e)=>setStatus(e.target.value)} />
                                        Confirmmé
                                    </div>
                                    <div>
                                    <input type="radio" value="complété" name="status" id="" onChange={(e)=>setStatus(e.target.value)} />
                                    Complété
                                    <input type="radio" value="annulé" name="status" id="" onChange={(e)=>setStatus(e.target.value)} />
                                    Annulé
                                    </div>
                                </div>
                            </article> */}
                        </div>
                    </section>
                    <div id="btns" className="btns ">
                    <button onClick={AddRendezVous}>Enregistrer</button>
                    <button className="annuler">Annuler</button>
                    </div>
            </div>
    </div>

  );
}
export default Rendez_vous;
