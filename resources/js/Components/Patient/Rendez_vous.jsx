import React, { useState } from "react";
import '../../../css/patient-css/rendez_vous.css';
function Rendez_vous() {
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [doctor, setDoctor] = useState("");
  const [reason, setReason] = useState("");
  const [status, setStatus] = useState("planned");
  const [responseMessage, setResponseMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const handleSubmit = async () => {
    
    
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
                  <option value="">Select a doctor</option>
                  <option value="doctor1">Dr. Ahmed</option>
                  <option value="doctor2">Dr. Ali</option>
                  <option value="doctor3">Dr. Fatima</option>
                  <option value="doctor4">Dr. Sara</option>
                  <option value="doctor5">Dr. Mohamed</option>
                  <option value="doctor6">Dr. Amina</option>
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
