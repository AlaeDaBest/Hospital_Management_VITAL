import React, { useState } from "react";
import Header from "./Header";
import SideMenu from "./SideMenu";
import { Link, NavLink } from "react-router-dom";
const FactureForm=()=>{
    const [patient_id,setPatient_id]=useState('');
    const [date_emission,setDate_emission]=useState('');
    const [date_paiement,setDate_paiement]=useState('');
    const [description,setDescription]=useState('');
    const [montant_total,setMontant_total]=useState('');
    const [statut,setStatut]=useState('non payée');
    const [messageFacture,setMessageFacture]=useState('');

    async function AddFacture(){
        const apiUrl='http://127.0.0.1:8000/factures';
        let newFacture={
            "patient_id":patient_id,
            "date_emission":date_emission,
            "date_paiement":date_paiement,
            "description":description,
            "montant_total":montant_total,
            "statut":statut
        }
        try {
            const response = await axios.post(apiUrl, newFacture, {
              responseType: 'blob', // 👈 important!
            });
        
            const blob = new Blob([response.data], { type: 'application/pdf' });
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'facture.pdf');
            document.body.appendChild(link);
            link.click();
            link.remove();
        
            setMessageFacture('Facture created and downloaded successfully.');
        }catch(e){
            console.error(e);
        }
    }
    return(
        <div>
            <Header title='Facture' />
            <SideMenu/>
             <nav id="SideBar">             
                <div id="add-rendez-vous">
                    <NavLink to='/receptionnistes/facture/list' className={({isActive})=>(isActive? 'active-admission-link':'')} >List</NavLink>
                </div>
                 <div id="add-rendez-vous">
                    <NavLink to='/receptionnistes/facture/ajouter' className={({isActive})=>(isActive? 'active-admission-link':'')}>Ajouter</NavLink>
                </div>
            </nav>
            <div className="form-rdv">
            <div className="message" id="message_rdv">
                <p>{messageFacture}</p>
            </div>
            <section id="Rendez-vous" className="rdv-form" >
                <h2>Facture</h2>
            <div>
                <article>
                    <label htmlFor="">ID patient</label>
                    <input type="text" name="" onChange={(e)=>setPatient_id(e.target.value)} />
                </article>
                <article>
                    <label htmlFor="">Date d'emission</label>
                    <input type="date" name="" onChange={(e)=>setDate_emission(e.target.value)} />
                </article>
                <article>
                    <label htmlFor="">Date de paiement</label>
                    <input type="date" name="" onChange={(e)=>setDate_paiement(e.target.value)} />
                </article>
                <article>
                    <label htmlFor="">Description</label>
                    <input type="text" name="" onChange={(e)=>setDescription(e.target.value)} />
                </article>
            </div>
            <div>
                <article>
                    <label htmlFor="">Montant</label>
                    <input type="text" onChange={(e)=>setMontant_total(e.target.value)} />
                </article>
                 <article>
                        <label htmlFor="">Statut</label> 
                        <div>
                            <div>
                                <input type="radio" value="payée" name="status" id=""  onChange={(e)=>setStatut(e.target.value)} />
                                Payée
                                <input type="radio" value="non payée" name="status" defaultChecked id="" onChange={(e)=>setStatut(e.target.value)} />
                                Non payée
                            </div>
                        </div>
                </article>
            </div>    
            </section>
            <div id="btns" className="btns btns-form ">
                    <button onClick={AddFacture}>Enregistrer et sauveguarder</button>
                    <button className="annuler">Annuler</button>
            </div>
            </div>
        </div>
    )
}
export default FactureForm;