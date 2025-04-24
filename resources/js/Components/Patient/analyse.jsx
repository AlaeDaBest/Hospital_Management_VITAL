import React from 'react';
import '../../../css/patient-css/analyse.css'; // Import your CSS file here
import { FaDownload, FaEllipsisV } from 'react-icons/fa';
import { FaChartBar, FaHourglassHalf, FaCheckCircle, FaHeartbeat } from 'react-icons/fa';
import SideMenu from './SideMenu';
import Header from '../Receptionniste/Header';

const results = [
  { id: 'ANL-2024-00125', status: 'En cours', type: 'Radio', date: '05-03-2025', price: '845.59DH' },
  { id: 'ANL-2025-00028', status: 'Disponible', type: 'Radio', date: '05-03-2025', price: '828.90DH' },
  { id: 'ANL-2025-00126', status: 'Disponible', type: 'Radio', date: '05-03-2025', price: '510.30DH' },
  { id: 'ANL-2025-00127', status: 'En attente', type: 'Radio', date: '05-03-2025', price: '641.20DH' },
  { id: 'ANL-2025-00002', status: 'En cours', type: 'Urine', date: '05-03-2025', price: '901.31DH' },
  { id: 'ANL-2024-00125', status: 'Disponible', type: 'Sang', date: '05-03-2025', price: '452.85DH' },
];

const AnalysisResults = () => {
  return (
    <div>
      <Header/>
      <SideMenu/>
    <div className="container">
        <div className="main-analyse">
          <div className="stats-grid">
            <div className="card">
              <FaChartBar className="card-icon" />
              <p>total d’analyses réalisées</p>
              <h2>1250</h2>
            </div>
            <div className="card">
              <FaHourglassHalf className="card-icon" />
              <p>résultats en attente de validation</p>
              <h2>87</h2>
            </div>
            <div className="card">
              <FaCheckCircle className="card-icon" />
              <p>résultats disponibles</p>
              <h2>1163</h2>
            </div>
            <div className="card">
              <FaHeartbeat className="card-icon" />
              <p>des analyses médicales récentes</p>
              <h2 className="positive">+11.7%</h2>
              <span>162</span>
            </div>
          </div>
        </div>
        <div className="table-container">
          <div className="table-filters">
            <input type="text" placeholder="Search..." />
            <select>
              <option>Status: All</option>
            </select>
            <select>
              <option>Type d’analyse: All</option>
            </select>
          </div>

          <table>
            <thead>
              <tr>
                <th>Documents</th>
                <th>Status</th>
                <th>Type d’analyse</th>
                <th>Date de l’analyse</th>
                <th>Prix</th>
                <th>Détails</th>
              </tr>
            </thead>
            <tbody>
            {results.map((res, i) => (
              <tr key={i}>
                
                <td>
                  <span className="icon-cell"><FaDownload className="icon action-icon" title="Télécharger" /></span>
                  <span >ID: {res.id}</span>
                </td>
                <td>
                  <span className={`status ${res.status.toLowerCase().replace(' ', '-')}`}>
                    {res.status}
                  </span>
                </td>
                <td>{res.type}</td>
                <td>{res.date}</td>
                <td>{res.price}</td>
                <td className="actions">
                  <button className="details-button"><FaEllipsisV /></button>
                </td>
              </tr>
            ))}
          </tbody>
          </table>
          <div className="pagination-row">
            <div className="pagination">
              <button>{'<'}</button>
              <button className="active">1</button>
              <span>...</span>
              <button>16</button>
            </div>
            <div className="rows-per-page">
              Rows per page <select><option>15</option></select>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default AnalysisResults;
