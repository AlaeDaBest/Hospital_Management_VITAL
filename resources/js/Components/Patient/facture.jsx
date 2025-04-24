import '../../../css/patient-css/facture.css';
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import SideMenu from './SideMenu';
import Header from '../Receptionniste/Header';
const Facture = () => {
  const [current, setCurrent] = useState(0);
  const facturesPerPage = 4;

  const factures = [
    { id: 'FACT-001', date: '01/01/2025', service: 'Consultation - Dr A', montant: 300, status: 'payé' },
    { id: 'FACT-002', date: '03/01/2025', service: 'Dentiste - Dr B', montant: 500, status: 'non payé' },
    { id: 'FACT-003', date: '05/01/2025', service: 'Radio - Dr C', montant: 400, status: 'payé' },
    { id: 'FACT-004', date: '07/01/2025', service: 'Cardio - Dr D', montant: 600, status: 'non payé' },
    { id: 'FACT-005', date: '09/01/2025', service: 'Consultation - Dr A', montant: 200, status: 'payé' },
    { id: 'FACT-006', date: '11/01/2025', service: 'Ortho - Dr F', montant: 750, status: 'non payé' },
    { id: 'FACT-007', date: '13/01/2025', service: 'Dermato - Dr G', montant: 350, status: 'payé' },
    { id: 'FACT-008', date: '15/01/2025', service: 'Ophtalmo - Dr H', montant: 450, status: 'non payé' },
    { id: 'FACT-009', date: '17/01/2025', service: 'Scanner - Dr I', montant: 800, status: 'payé' },
    { id: 'FACT-010', date: '19/01/2025', service: 'Consultation - Dr J', montant: 550, status: 'non payé' },
  ];

  const totalPages = Math.ceil(factures.length / facturesPerPage);

  const next = () => {
    if (current + 4 < factures.length) {
      setCurrent(current + 1);
    }
  };
  
  const prev = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };
  return (
    <div className="container">
      <Header title="Facture"/>
      <SideMenu/>
      <div className="facture-slider">
        <button className="nav-btn" onClick={prev} disabled={current === 0}>
          <FaChevronLeft />
        </button>

        <div className="facture-cards-wrapper">
          {factures.slice(current, current + 4).map((facture) => (
            <div key={facture.id} className={`facture-card ${facture.status === 'non payé' ? 'unpaid' : 'paid'}`}>
              <h3>VITAL</h3>
              <p><strong>{facture.id}</strong></p>
              <p>Date: {facture.date}</p>
              <p>{facture.service}</p>
              <p><strong>Montant: {facture.montant} DH</strong></p>
              <div className="status">{facture.status === 'payé' ? '✔' : 'Payer'}</div>
            </div>
          ))}
        </div>

        <button className="nav-btn" onClick={next} disabled={current + facturesPerPage >= factures.length}>
          <FaChevronRight />
        </button>
      </div>
      <div className="payment-form">
        <h4>Règlement de la facture <span className="blue">#{factures[current].id}</span></h4>
        <p><strong>Montant:</strong> {factures[current].montant} DH</p>
        <div className="form-box">
          <p>Options de paiement</p>
          <label><input type="radio" name="payment" /> Carte bancaire</label>
          <label><input type="radio" name="payment" /> Mobile Money</label>
          <label><input type="radio" name="payment" /> Virement bancaire</label>
        </div>

        <div className="card-details">
          <input type="text" placeholder="N° de carte" />
          <input type="text" placeholder="Date expiration" />
          <input type="text" placeholder="CVV" />
          <button className="pay-btn">Payer</button>
        </div>
      </div>

    </div>
  );
};

export default Facture;

