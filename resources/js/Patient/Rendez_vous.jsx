import React from "react";
function Facture() {
    return (
        <div className="container">
            <h2>Facture</h2>
            <div className="facture-card">
                <h3>Facture #12345</h3>
                <p>Date: 2023-10-01</p>
                <p>Montant: 1500 MAD</p>
                <button>Payer</button>
            </div>
        </div>
    );
}
export default Facture;