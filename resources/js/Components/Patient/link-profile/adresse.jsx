import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";

const AdresseMedicale = () => {
  const [patient] = useOutletContext();
  const [adresses, setAdresses] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setAdresses([
        { id: 1, nom: "Dr. Martin", specialite: "Médecin généraliste", adresse: "123 Rue de la Santé, Paris", tel: "01 23 45 67 89" },
        { id: 2, nom: "Clinique Saint-Louis", specialite: "Cardiologie", adresse: "456 Avenue des Soins, Lyon", tel: "04 56 78 90 12" }
      ]);
      setLoading(false);
    }, 800);
  }, []);

  const handleAjouterAdresse = () => {
    toast.info('Fonctionnalité à implémenter');
  };

  if (loading) return <p>Chargement des adresses médicales...</p>;

  return (
    <div className="adresse-medicale-section">
      <h3>Mes Adresses Médicales</h3>
      
      {adresses.length === 0 ? (
        <p>Aucune adresse médicale enregistrée.</p>
      ) : (
        <div className="adresses-list">
          {adresses.map(adresse => (
            <div key={adresse.id} className="adresse-item">
              <h4>{adresse.nom}</h4>
              <p><strong>Spécialité:</strong> {adresse.specialite}</p>
              <p><strong>Adresse:</strong> {adresse.adresse}</p>
              <p><strong>Téléphone:</strong> {adresse.tel}</p>
            </div>
          ))}
        </div>
      )}
      
      <button onClick={handleAjouterAdresse} className="ajouter-adresse-button">
        Ajouter une adresse médicale
      </button>
    </div>
  );
};

export default AdresseMedicale;