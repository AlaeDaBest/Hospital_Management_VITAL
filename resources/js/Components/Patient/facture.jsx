import '../../../css/patient-css/facture.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
const Facture = () => {
  const [current, setCurrent] = useState(0);
  const [factures, setFactures] = useState([]);
  const [selectedFacture, setSelectedFacture] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiration, setExpiration] = useState('');
  const [cvv, setCvv] = useState('');
  const [loading, setLoading] = useState(false);
  const facturesPerPage = 4;
  useEffect(() => {
    fetchFactures();
  }, []);

  const fetchFactures = () => {
    axios.get('http://127.0.0.1:8000/api/facture')
      .then(response => {
        setFactures(response.data);
        if (response.data.length > 0) {
          if (selectedFacture) {
            const updatedSelectedFacture = response.data.find(f => f.id === selectedFacture.id);
            if (updatedSelectedFacture) {
              setSelectedFacture(updatedSelectedFacture);
            } else {
              setSelectedFacture(response.data[0]);
            }
          } else {
            setSelectedFacture(response.data[0]);
          }
        }
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données :', error);
      });
  };

  const next = () => {
    if (current + facturesPerPage < factures.length) {
      setCurrent(current + 1);
    }
  };

  const prev = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const handleFactureClick = (facture) => {
    setSelectedFacture(facture);
    setPaymentMethod('');
    setCardNumber('');
    setExpiration('');
    setCvv('');
  };

  const handlePayment = () => {
    if (!selectedFacture) return;
        if (!paymentMethod) {
      alert('Veuillez sélectionner une méthode de paiement');
      return;
    }
        if (paymentMethod === 'carte') {
      if (!cardNumber || !expiration || !cvv) {
        alert('Veuillez remplir tous les champs de la carte');
        return;
      }
    }
    setLoading(true);
    const data = {
      facture_id: selectedFacture.id,
      method: paymentMethod,
      card_number: cardNumber,
      expiration: expiration,
      cvv: cvv,
    };
    axios.post('http://127.0.0.1:8000/paiement', data)
      .then(response => {
        console.log('Paiement réussi :', response.data);
        alert('Paiement effectué avec succès !');
          const updatedFactures = factures.map(facture => {
          if (facture.id === selectedFacture.id) {
            return { ...facture, statut: 'payée' };
          }
          return facture;
        });
        setFactures(updatedFactures);
        setSelectedFacture({ ...selectedFacture, statut: 'payée' });
        setPaymentMethod('');
        setCardNumber('');
        setExpiration('');
        setCvv('');
        fetchFactures();
      })
      .catch(error => {
        alert('Erreur lors du paiement. Veuillez réessayer.');
      })
      .finally(() => {
        setLoading(false);
      });
  };
   const renderCardFields = () => {
    if (paymentMethod === 'carte') {
      return (
        <>
          <input 
            type="text" 
            placeholder="N° de carte" 
            value={cardNumber} 
            onChange={(e) => setCardNumber(e.target.value)} 
          />
          <input 
            type="text" 
            placeholder="Date expiration (MM/YY)" 
            value={expiration} 
            onChange={(e) => setExpiration(e.target.value)} 
          />
          <input 
            type="text" 
            placeholder="CVV" 
            value={cvv} 
            onChange={(e) => setCvv(e.target.value)} 
            maxLength="3"
          />
        </>
      );
    } else if (paymentMethod === 'mobile') {
      return (
        <input 
          type="text" 
          placeholder="Numéro de téléphone" 
          value={cardNumber} 
          onChange={(e) => setCardNumber(e.target.value)} 
        />
      );
    } else if (paymentMethod === 'virement') {
      return (
        <div className="virement-info">
          <p>Effectuez un virement sur notre compte:</p>
          <p>IBAN: MA123456789012345678901234</p>
          <p>Référence à indiquer: FACT-{selectedFacture?.id}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="container">
      <div className="facture-slider">
        <button className="nav-btn" onClick={prev} disabled={current === 0}>
          <FaChevronLeft />
        </button>

        <div className="facture-cards-wrapper">
          {factures.slice(current, current + facturesPerPage).map((facture) => (
            <div
              key={facture.id}
              className={`facture-card ${facture.statut === 'payée' ? 'paid' : 'unpaid'} ${selectedFacture?.id === facture.id ? 'selected' : ''}`}
              onClick={() => handleFactureClick(facture)}
            >
              <h3>VITAL</h3>
              <p><strong>Facture #{facture.id}</strong></p>
              <p>Date: {facture.analyse_date}</p>
              <p>Heure: {facture.analyse_heure}</p>
              <p><strong>Montant: {facture.montant} DH</strong></p>
              <div className="status">{facture.statut === 'payée' ? '✔ Payée' : 'À payer'}</div>
            </div>
          ))}
        </div>

        <button className="nav-btn" onClick={next} disabled={current + facturesPerPage >= factures.length}>
          <FaChevronRight />
        </button>
      </div>

      {selectedFacture && (
        <div className="facture-details">
          <h4>Détails de la Facture <span className="blue">#{selectedFacture.id}</span></h4>
          <p><strong>Date:</strong> {selectedFacture.analyse_date}</p>
          <p><strong>Heure:</strong> {selectedFacture.analyse_heure}</p>
          <p><strong>Montant:</strong> {selectedFacture.montant} DH</p>
          <p><strong>Statut:</strong> <span className={selectedFacture.statut === 'payée' ? 'status-paid' : 'status-unpaid'}>
            {selectedFacture.statut}
          </span></p>
        </div>
      )}

      {selectedFacture && selectedFacture.statut !== 'payée' && (
        <div className="payment-form">
          <h4>Règlement de la facture <span className="blue">#{selectedFacture.id}</span></h4>
          <input type="hidden" value={selectedFacture.id} />

          <p><strong>Montant:</strong> {selectedFacture.montant} DH</p>
          <div className="form-box">
            <p>Options de paiement</p>
            <label>
              <input 
                type="radio" 
                name="payment" 
                value="carte" 
                checked={paymentMethod === 'carte'}
                onChange={(e) => setPaymentMethod(e.target.value)} 
              />
              Carte bancaire
            </label>
            <label>
              <input 
                type="radio" 
                name="payment" 
                value="mobile" 
                checked={paymentMethod === 'mobile'}
                onChange={(e) => setPaymentMethod(e.target.value)} 
              />
              Mobile Money
            </label>
            <label>
              <input 
                type="radio" 
                name="payment" 
                value="virement" 
                checked={paymentMethod === 'virement'}
                onChange={(e) => setPaymentMethod(e.target.value)} 
              />
              Virement bancaire
            </label>
          </div>

          <div className="card-details">
            {renderCardFields()}
            <button 
              className="pay-btn" 
              onClick={handlePayment}
              disabled={loading || !paymentMethod}
            >
              {loading ? 'Traitement...' : 'Payer'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Facture;












