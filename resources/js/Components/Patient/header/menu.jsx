import React from 'react';
import { Link } from 'react-router-dom';

import './menu.css';
const Menu = () => {
  return (
    <div className="sidebar">
      <ul className="menu">
        <li>
          <Link to="/patients/profile" className="menu-link">
          <i className="fas fa-user"></i> 
          <span>Profile</span>
          </Link>
        </li>
        <li>
          <Link to="/rendez_vous" className="menu-link">
            <i className="fas fa-calendar-alt"></i> 
            <span>Rendez-vous</span>
          </Link>
        </li>
        <li>
          <Link to="/appointments" className="menu-link">
            <i className="fas fa-history"></i>
            <span> Historique des Rendez-vous</span>
          </Link>
        </li>
        <li>
          <Link to="/ordonnances" className="menu-link">
            <i className="fas fa-file-prescription"></i> 
            <span>Ordonnances</span>
          </Link>
        </li>
        <li>
          <Link to="/analyses" className="menu-link">
            <i className="fas fa-vials"></i> 
            <span>Résultats d'analyses</span>
          </Link>
        </li>
        <li>
          <Link to="/medecins" className="menu-link">
            <i className="fas fa-user-md"></i> 
            <span>Médecins </span>
          </Link>
        </li>
        <li>
          <Link to="/facture" className="menu-link">
            <i className="fas fa-receipt"></i> 
            <span>Facture</span> 
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default Menu;
