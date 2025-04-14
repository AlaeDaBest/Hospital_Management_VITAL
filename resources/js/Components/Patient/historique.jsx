import React from 'react';
import '../../../css/patient-css/historique.css';
const appointments = [
  { date: "02-06-2025", time: "10:30", type: "Programmé", doctor: "ANAS KAIL", status: "Active" },
  { date: "10-05-2025", time: "10:30", type: "Complété", doctor: "ANAS KAIL", status: "Inactive" },
  { date: "02-06-2025", time: "11:30", type: "Annulé", doctor: "MALAK TALIK", status: "Inactive" },
  { date: "02-02-2025", time: "10:30", type: "Programmé", doctor: "ANAS KAIL", status: "Active" },
  { date: "02-02-2024", time: "15:30", type: "Annulé", doctor: "ANAS KAIL", status: "Active" },
  { date: "02-02-2024", time: "12:15", type: "Complété", doctor: "ANAS KAIL", status: "Active" },
  { date: "02-03-2023", time: "14:00", type: "Confirmé", doctor: "ADAM KAIL", status: "Active" },
  { date: "23-06-2023", time: "09:30", type: "Annulé", doctor: "SOHIAB KAIL", status: "Inactive" },
];
const Historique = () => {
  return (
    <div className="container">
      {/* Main Content */}
      <div className="main-historique">
        <div className="header">
          <h2>Historique des Rendez-vous</h2>
          <button className="export-button">Export</button>
        </div>
        <div className="controls">
          <input type="text" placeholder="Search" className="search-input" />
          <select>
            <option>Sort by: Newest</option>
          </select>
        </div>
        <table className="appointment-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Heure</th>
              <th>Type</th>
              <th>Médecin</th>
              <th>Ordonnance</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appt, index) => (
              <tr key={index}>
                <td>{appt.date}</td>
                <td>{appt.time}</td>
                <td>{appt.type}</td>
                <td>{appt.doctor}</td>
                <td>
                  <button className="download-button">Télécharger</button>
                </td>
                <td>
                  <span className={`status ${appt.status === 'Active' ? 'active' : 'inactive'}`}>
                    {appt.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination">
          {[1, 2, 3, 4, 5, "...", 10].map((num, i) => (
            <button key={i} className={`page-button ${num === 1 ? 'selected' : ''}`}>{num}</button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Historique;
