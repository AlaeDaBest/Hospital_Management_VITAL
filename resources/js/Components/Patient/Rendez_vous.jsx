import React, { useEffect, useState } from "react";
import '../../../css/patient-css/rendez_vous.css';
import Header from "../Receptionniste/Header";
import SideBar from "../Receptionniste/SideBar";
import SideMenu from "./SideMenu";
import axios from "axios";
function Rendez_vous() {
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [doctor, setDoctor] = useState("");
  const [reason, setReason] = useState("");
  const [status, setStatus] = useState("planned");
  const [responseMessage, setResponseMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [doctors,setDoctors]=useState([]);

  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/doctors')
    .then(response => {
      setDoctors(response.data);
      console.log(response);
    });
  },[]);

  const handleSubmit = async () => {
    const patient=JSON.parse(localStorage.getItem("receptionniste"));
    console.log(patient);
    let newRendezVous={
      "type_RDV":type,
      "date_RDV":date,
      "temps_RDV":time,
      "doctorID":doctor,
      "patientID":'IDPatient',
      "statut":status,
    }
    const apiUrlRendezVous='http://127.0.0.1:8000/rendez_vouss';
    try{
        const response=await axios.post(apiUrlRendezVous,newRendezVous);
        console.log('Response:', response);
        setMessageRendez_vous(response.data.message)
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
      <div className="message message_f" id="message_rdv">
          <p>{showMessage}</p>
      </div>
    <div className="container">
    
      <div className="main">
        {/* Appointment Form Section */}
        <div className="appointment-header">
        </div>
        <div className="appointment-form">
          <h2>Rendez-vous :</h2>
          <form>
            <div className="form-elt">
              <div className="form-elt1">
                <label>Type de rendez-vous :</label>
                <input type="text" name="type" value={type} onChange={(e)=>setType(e.target.value)} />
                <label>Date de rendez-vous :</label>
                <input type="date" name="date" value={date} onChange={(e)=>setDate(e.target.value)} />
                <label>Temps de rendez-vous :</label>
                <input type="time" name="time" value={time} onChange={(e)=>setTime(e.target.value)} />
              </div>
              <div className="form-elt2">
                <label>Docteur :</label>
                <select name="doctor" value={doctor} onChange={(e)=>setDoctor(e.target.value)}>
                  {doctors.map(doc=>(
                    <option value={doc.id}>{doc.compte.nom} {doc.compte.prenom}</option>
                  ))}
                </select>
                <label>Status :</label>
                <select name="status" value={status} onChange={(e)=>setStatus(e.target.value)}>
                  <option value="planned">Planned</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="canceled">Canceled</option>
                </select>
              </div>
            </div>
            <button type="button" onClick={handleSubmit}>Enregistrer</button>
            <button type="button" onClick={handleCancel}>Annuler</button>
          </form>
        </div>

        {/* Past Sessions Section */}
        <div className="past-sessions">
          <h2>Sessions en cours :</h2>
          {showMessage &&
            <div className="response-message">
              <h3>{responseMessage} </h3>
              <span>{date}{time}</span>
            </div>
          }
          <h2>Session passée    </h2>
          <ul>
            <li>12-08-24: Préparation pour une intervention chirurgicale.</li>
            <li>12-08-24: Contrôle du cholestérol et de la glycémie à jeun.</li>
            <li>19-03-24: Douleurs abdominales aiguës et fièvre.</li>
            <li>12-02-24: Douleur thoracique et essoufflement.</li>
          </ul>
        </div>
      </div>
    </div>
    </div>

  );
}
export default Rendez_vous;
