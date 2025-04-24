import React, { useEffect, useState } from "react";
import Header from "./Header";
import SideMenu from "./SideMenu";
import { NavLink } from "react-router-dom";
import axios from "axios";
const ChirurgieForm=()=>{
    const [Type,setType]=useState('');
    const [Chirurgie_date,setChirurgie_date]=useState('');
    const [Chirurgie_heure,setChirurgie_heure]=useState('');
    const [Patient_id,setPatient_id]=useState('');
    const [Doctor_id,setDoctor_id]=useState(1);
    const [doctors,setDoctors]=useState([]);
    const [Statut,setStatut]=useState('programmé');
    const [messageChirurgie,setMessageChirurgie]=useState('');

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/doctors')
        .then(response=>{
            console.log(response);
            setDoctors(response.data);
        }).catch(error=>console.log(error))
    },[]);

    async function AddChirurgie(){
        let newChirurgie={
            "type":Type,
            "chirurgie_date":Chirurgie_date,
            "chirurgie_heure":Chirurgie_heure,
            "patient_id":Patient_id,
            "doctor_id":Doctor_id,
            "statut":Statut,
        }
        const apiUrl='http://127.0.0.1:8000/chirurgies';
        const response=await axios.post(apiUrl,newChirurgie);
        console.log('Response:', response);
        setMessageChirurgie(response.data.message);
        setType('');
        setChirurgie_date('');
        setChirurgie_heure('');
        setPatient_id('');
        setDoctor_id(1);
        setStatut('programmé');
        setDoctors([]);
    }
    return(
        <div id="container-rdv">  
        <Header title="Chirurgie" />
        <SideMenu />
        <div>
        <nav id="SideBar">
            <div id="add-rendez-vous">
            <NavLink to='/receptionnistes/chirurgies/ajouter' className={({isActive})=>(isActive? 'active-admission-link':'')} >Ajouter</NavLink>
            </div>
            <div id="add-rendez-vous">
            <NavLink to="/receptionnistes/chirurgies/programme"  className={({isActive})=>(isActive? 'active-admission-link':'')} >List</NavLink> 
            </div>
       
        <br />
        </nav>
        </div>
        <div className="form-rdv">
            <div className="message" id="message_rdv">
                <p>{messageChirurgie}</p>
            </div>
            <section id="Rendez-vous" className="rdv-form" >
                    <h2>Chirurgie</h2>
                    <div>
                        <article>
                            <label htmlFor="">ID patient</label>
                            <input type="text" name="" onChange={(e)=>setPatient_id(e.target.value)} />
                        </article>
                        <article>
                            <label htmlFor="">Type de chirurgie</label>
                            <input type="text" name="" onChange={(e)=>setType(e.target.value)} />
                        </article>
                        <article>
                            <label htmlFor="">Date de chirurgie</label>
                            <input type="date" name="" onChange={(e)=>setChirurgie_date(e.target.value)} />
                        </article>
                        <article>
                            <label htmlFor="">Temps de chirurgie</label>
                            <input type="time" name="" onChange={(e)=>setChirurgie_heure(e.target.value)} />
                        </article>
                    </div>
                    <div>
                        <article>
                            <label htmlFor="">Docteur</label>
                            <select name="docteur" id="" onChange={(e)=>setDoctor_id(e.target.value)} >
                                {doctors.map((doctor)=>(
                                    <option key={doctor.id} value={doctor.id}>{doctor.compte.nom} {doctor.compte.prenom}</option>
                                ))} 
                            </select>
                        </article>
                        {/* <article>
                            <label htmlFor="">Raison de visite</label>
                            <input type="text" name="" onChange={(e)=>setRaisonVisite(e.target.value)} />
                        </article> */}
                        <article>
                            <label htmlFor="">Statut</label> 
                            <div>
                                <div>
                                    <input type="radio" value="programmé" name="status" id="" defaultChecked onChange={(e)=>setStatut(e.target.value)} />
                                    Programmé
                                    <input type="radio" value="confirmé" name="status" id="" onChange={(e)=>setStatut(e.target.value)} />
                                    Confirmmé
                                </div>
                                <div>
                                <input type="radio" value="complété" name="status" id="" onChange={(e)=>setStatut(e.target.value)} />
                                Complété
                                <input type="radio" value="annulé" name="status" id="" onChange={(e)=>setStatut(e.target.value)} />
                                Annulé
                                </div>
                            </div>
                        </article>
                    </div>
                </section>
        </div>
        <div id="btns" className="btns">
                <button onClick={AddChirurgie}>Enregistrer</button>
                <button className="annuler">Annuler</button>
        </div>
    </div>
    )
}
export default ChirurgieForm;