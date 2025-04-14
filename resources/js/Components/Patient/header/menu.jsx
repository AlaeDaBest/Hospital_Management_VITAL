import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css';

const Menu = () => {
  return (
    <div className="sidebar">
      <ul className="menu">
        <li>
          <Link to="/profile" className="menu-link">
            <i className="fas fa-user"></i> Profile
          </Link>
        </li>
        <li>
          <Link to="/rendez_vous" className="menu-link">
            <i className="fas fa-calendar-alt"></i> Rendez-vous
          </Link>
        </li>
        <li>
          <Link to="/historique_rendezVous" className="menu-link">
            <i className="fas fa-history"></i> Historique des Rendez-vous
          </Link>
        </li>
        <li>
          <Link to="/ordonnances" className="menu-link">
            <i className="fas fa-file-prescription"></i> Ordonnances
          </Link>
        </li>
        <li>
          <Link to="/analyses" className="menu-link">
            <i className="fas fa-vials"></i> Résultats d'analyses
          </Link>
        </li>
        <li>
          <Link to="/medecins" className="menu-link">
            <i className="fas fa-user-md"></i> Médecins
          </Link>
        </li>
        <li>
          <Link to="/facture" className="menu-link">
            <i className="fas fa-receipt"></i> Facture
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default Menu;
