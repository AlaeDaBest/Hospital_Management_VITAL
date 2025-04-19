import React, { useEffect, useState } from "react";
import Header from "./Header";
import SideMenu from "./SideMenu";
import SideBar from "./SideBar";
import axios from "axios";
import { useLocation } from "react-router-dom";
const EditPatientForm=()=>{
        const [title,setTitle]=useState('Admission');

        const [ID,setID]=useState('');
        const [CIN,setCIN]=useState('');
        const [Nom,setNom]=useState('');
        const [Prenom,setPrenom]=useState('');
        const [Genre,setGenre]=useState('feminin');
        const [DateNaissance,setDateNaissance]=useState('');
        const [Email,setEmail]=useState('');    
        const [Tel,setTel]=useState('');
        const [Adresse,setAdresse]=useState('');
        const [TypeRDV,setTypeRDV]=useState('');
        const [DateRDV,setDateRDV]=useState('');
        const [TempsRDV,setTempsRDV]=useState('');
        const [Docteur,setDocteur]=useState(1);
        // const [TypeRE,setRaisonVisite]=useState('');
        const [Status,setStatus]=useState('programmé');
        const [GroupeSanguin,setGroupeSanguin]=useState('');
        const [Allergies,setAllergies]=useState('');
        const [ConditionsMedicales,setConditionsMedicales]=useState('');
        const [BesoinsChambre,setBesoinsChambre]=useState(false);
        const [Departement,setDepartement]=useState('');
        const [Chambre,setChambre]=useState('');
        const [errors,setErrors]=useState({});
        const [success,setSuccess]=useState(false);
        const [patientID,setPatientID]=useState('');
        const [hidden,setHidden]=useState(true);
        const [patientData,setPatientData]=useState({});
        const [message,setMessage]=useState('');
        async function SearchPatient(){
            const apiUrl =`http://127.0.0.1:8000/patients/${ID}`;
            try{
                const response=await axios.get(apiUrl);
                setPatientData(response.data);
                console.log(response)
            }catch(error){
                console.error(error);
            }
        }
        const location=useLocation();
        const patient=location.state?.patient;
        console.log(patient);
        useEffect(()=>{
            if(patient){
                setID(patient.id);
                setCIN(patient.CIN);
                setNom(patient.nom);
                setPrenom(patient.prenom);
                setGenre(patient.genre);
                setDateNaissance(patient.date_Naissance);
                setEmail(patient.email);
                setTel(patient.tel);
                setAdresse(patient.adresse);
                setGroupeSanguin(patient.groupeSanguin);
                setAllergies(patient.allergie);
                setConditionsMedicales(patient.conditions_Medicaux);
                console.log(ID)
            }
        },[patient]);
        useEffect(()=>{
            if (patientData && Object.keys(patientData).length > 0) {
              setCIN(patientData.CIN);
              setNom(patientData.nom);
              setPrenom(patientData.prenom);
              setGenre(patientData.genre);
              setDateNaissance(patientData.date_Naissance);
              setEmail(patientData.email);
              setTel(patientData.tel);
              setAdresse(patientData.adresse);
              setGroupeSanguin(patientData.groupeSanguin);
              setAllergies(patientData.allergie);
              setConditionsMedicales(patientData.conditions_Medicaux);
            }
        }, [patientData]);
        async function UpdatePatient(){
            let updatedPatient={
                CIN:CIN,
                nom:Nom,
                prenom:Prenom,
                genre:Genre,
                date_Naissance:DateNaissance,
                email:Email,
                tel:Tel,
                adresse:Adresse,
                groupeSanguin:GroupeSanguin,
                allergie:Allergies,
                conditions_Medicaux:ConditionsMedicales
            }
            const apiUrl=`http://127.0.0.1:8000/patients/${ID}`;
            try{
                const response=await axios.put(apiUrl,updatedPatient);
                console.log(response.data);
                setMessage(response.data.message);
            }catch(error){
                console.error(error);
            }
        }
        function ClearForm(){
            setPatientID('');
            setCIN('');
            setNom('');
            setPrenom('');
            setGenre('feminin');
            setDateNaissance('');
            setEmail('');    
            setTel('');
            setAdresse('');
            setGroupeSanguin('');
            setAllergies('');
            setConditionsMedicales('');
        }
    return(
        <div id="container">
            <Header title={title} />
            <SideMenu/>
            <SideBar/>
            <section id="messages">
                <div className="message">
                    <p>{message}</p>
                </div>
            </section>
            <div id="searchPatient">
                <label htmlFor="">ID:</label>
                <input type="text" name="" id="" onChange={(e)=>setID(e.target.value)} />
                <button onClick={SearchPatient} >Chercher</button>
            </div>
            <form action=""  onSubmit={UpdatePatient} id="forms">
                <section id="infoPatient" >
                    <h2>Les informations De Patient</h2>

                    <article>
                        <label htmlFor="" >ID</label>
                        <input type="text" value={ID} name="" id="" onChange={(e)=>setID(e.target.value)} required disabled />                        
                    </article>
                    <article>
                        <label htmlFor="" >CIN</label>
                        <input type="text" value={CIN} onChange={(e)=>setCIN(e.target.value)} required  />                        
                    </article>
                    <article>
                        <label htmlFor="">Nom</label> 
                        <input type="text" value={Nom} onChange={(e)=>setNom(e.target.value)} required />
                    </article>
                    <article>
                        <label htmlFor="">Prénom</label> 
                        <input type="text" value={Prenom} onChange={(e)=>setPrenom(e.target.value)} required />
                    </article>
                    <article>
                        <label htmlFor="">Genre</label> 
                        <div>
                            <input type="radio"  value="feminin" name="genre" id="" checked={Genre=="feminin"?true:""} onChange={(e)=>setGenre(e.target.value)} />
                            <label htmlFor=""  >Feminin</label>
                            <input type="radio" value="masculin" name="genre" id="" checked={Genre=="masculin"?true:""} onChange={(e)=>setGenre(e.target.value)}  />
                            <label htmlFor="">Masculin</label>
                        </div>
                    </article>
                    <article>
                        <label htmlFor="">Date De Naissance</label> 
                        <input type="date" name="" id="" value={DateNaissance} onChange={(e)=>setDateNaissance(e.target.value)} required />
                    </article>
                    <article>
                        <label htmlFor="">Adresse Email</label> 
                        <input type="text" name="" id="" value={Email} onChange={(e)=>setEmail(e.target.value)} required />
                        
                    </article>
                    <article>
                        <label htmlFor="">Numéro De Téléphone</label> 
                        <input type="text" name="" id="" value={Tel} onChange={(e)=>setTel(e.target.value)} required />
                    </article>
                    <article>
                        <label htmlFor="">Adresse</label> 
                        <input type="text" name="" id="" value={Adresse} onChange={(e)=>setAdresse(e.target.value)} required />
                    </article>
                </section>
                <section >
                    <section id="plusInfo">
                        <h2>Plus d'information</h2>
                        <article>
                            <label htmlFor="">Groupe sanguin</label>
                            <input type="text" value={GroupeSanguin} onChange={(e)=>setGroupeSanguin(e.target.value)} />
                        </article>
                        <article>
                            <label htmlFor="">Allergies</label>
                            <input type="text" value={Allergies} onChange={(e)=>setAllergies(e.target.value)} />
                        </article>
                        <article>
                            <label htmlFor="">Conditions médicales</label>
                            <input type="text" value={ConditionsMedicales} onChange={(e)=>setConditionsMedicales(e.target.value)} />
                        </article>
                    </section>                   
                </section>
                <div id="btns">
                    <button  type="submit" >Enregister</button>
                    <button onClick={ClearForm}>Annuler</button>
                </div>
            </form>   
        </div>
    )
}
export default EditPatientForm;