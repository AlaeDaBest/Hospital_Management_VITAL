import React, { useEffect, useState } from "react";
import Header from "./Header";
import SideMenu from "./SideMenu";
import { Link, NavLink, useLocation } from "react-router-dom";
const EditFacture=()=>{
    const [patient_id,setPatient_id]=useState('');
    const [date_emission,setDate_emission]=useState('');
    const [date_paiement,setDate_paiement]=useState('');
    const [description,setDescription]=useState('');
    const [montant_total,setMontant_total]=useState('');
    const [statut,setStatut]=useState('non payée');
    const [messageFacture,setMessageFacture]=useState('');

    const location=useLocation();
    const facture=location.state?.facture;
    console.log(facture);

    useEffect(()=>{
        setPatient_id(facture.patient_id);
        setDate_emission(facture.date_emission);
        setDate_paiement(facture.date_paiement);            
        setDescription(facture.description);
        setMontant_total(facture.montant_total);
        setStatut(facture.statut);
    },[facture]);
    async function AddFacture(){
        const apiUrl=`http://127.0.0.1:8000/factures/${facture.id}`;

        let Facture={
            "patient_id":patient_id,
            "date_emission":date_emission,
            "date_paiement":date_paiement,
            "description":description,
            "montant_total":montant_total,
            "statut":statut
        }
        try{
            const response=await axios.put(apiUrl,Facture);
            console.log(response);
            setMessageFacture(response.data.message);
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
                        <input type="text" name="" value={patient_id} onChange={(e)=>setPatient_id(e.target.value)} />
                    </article>
                    <article>
                        <label htmlFor="">Date d'emission</label>
                        <input type="date" name="" value={date_emission} onChange={(e)=>setDate_emission(e.target.value)} />
                    </article>
                    <article>
                        <label htmlFor="">Date de paiement</label>
                        <input type="date" name="" value={date_paiement} onChange={(e)=>setDate_paiement(e.target.value)} />
                    </article>
                    <article>
                        <label htmlFor="">Description</label>
                        <input type="text" value={description} name="" onChange={(e)=>setDescription(e.target.value)} />
                    </article>
                </div>
                <div>
                    <article>
                        <label htmlFor="">Montant</label>
                        <input type="text" value={montant_total} onChange={(e)=>setMontant_total(e.target.value)} />
                    </article>
                    <article>
                            <label htmlFor="">Statut</label> 
                            <div>
                                <div>
                                    <input type="radio" value="payée" name="status" id="" checked={statut=="payée"?true:""} onChange={(e)=>setStatut(e.target.value)} />
                                    Payée
                                    <input type="radio" value="non payée" name="status" defaultChecked id="" onChange={(e)=>setStatut(e.target.value)} />
                                    Non payée
                                </div>
                            </div>
                    </article>
                </div>    
                </section>
                <div id="btns" className="btns btns-form ">
                    <button onClick={AddFacture}>Enregistrer</button>
                    <button className="annuler">Annuler</button>
                </div>
            </div>
        </div>
    )
}
export default EditFacture;