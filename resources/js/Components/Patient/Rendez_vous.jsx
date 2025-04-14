import React, { useState } from "react";
import '../../../css/patient-css/rendez_vous.css';
function Rendez_vous() {
  const [appointment, setAppointment] = useState({
    type: "",
    date: "",
    time: "",
    doctor: "",
    reason: "",
    status: "planned"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointment({ ...appointment, [name]: value });
  };
  const handleSubmit = () => {
    console.log("Appointment saved:", appointment);
  };

  const handleCancel = () => {
    console.log("Appointment canceled");
  };

  return (
    <div className="responsive-wrapper">

    <div className="container">
      <div className="main">
        {/* Appointment Form Section */}
        <div className="appointment-form">
          <h2>Rendez-vous :</h2>
          <form>
            <div className="form-elt">
              <div className="form-elt1">
                <label>Type de rendez-vous :</label>
                <input type="text" name="type" value={appointment.type} onChange={handleChange} />
                <label>Date de rendez-vous :</label>
                <input type="date" name="date" value={appointment.date} onChange={handleChange} />
                <label>Temps de rendez-vous :</label>
                <input type="time" name="time" value={appointment.time} onChange={handleChange} />
              </div>
              <div className="form-elt2">
                <label>Docteur :</label>
                <input type="text" name="doctor" value={appointment.doctor} onChange={handleChange} />
                <label>Motif :</label>
                <input type="text" name="reason" value={appointment.reason} onChange={handleChange} />
                <label>Status :</label>
                <select name="status" value={appointment.status} onChange={handleChange}>
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
          <h2>Session passée</h2>
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
