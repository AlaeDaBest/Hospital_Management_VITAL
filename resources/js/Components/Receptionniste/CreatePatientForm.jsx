import React, { useEffect, useState } from "react";
import Header from "./Header";
import SideMenu from "./SideMenu";
import axios from "axios";
import SideBar from "./SideBar";
const CreatePatientForm=()=>{
    const [title,setTitle]=useState('Admission');

    // const [ID,setID]=useState('');
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
    const [errors,setErrors]=useState("");
    const [success,setSuccess]=useState(false);
    const [patientID,setPatientID]=useState(1);
    const [hidden,setHidden]=useState(true);
    const [messagePatient,setMessagePatient]=useState('');
    const [messageRendez_vous,setMessageRendez_vous]=useState('');
    const [messageCompte,setMessageCompte]=useState('');
    const [doctors,setDoctors]=useState([]);

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/doctors')
        .then(response => {
            setDoctors(response.data);
            console.log(response);
        });
    },[]);

    async function AddPatient (e){
        e.preventDefault();
        let newPatient={
            "CIN":CIN,
            "nom":Nom,
            "prenom":Prenom,
            "genre":Genre,
            "date_Naissance":DateNaissance,
            "email":Email,
            "tel":Tel,
            "adresse":Adresse,
            "groupeSanguin":GroupeSanguin,
            "allergie":Allergies,
            "conditions_Medicaux":ConditionsMedicales,
        }
        try{
            const apiUrl='http://127.0.0.1:8000/patients';
            try{
                const response=await axios.post(apiUrl,newPatient);
                setPatientID(response.data.id);
                console.log('Response:', response);
                setMessagePatient(response.data.message);
            }catch(error){
                console.error('Error:', error);
                // alert(error.message);
            }
            console.log('patientID:', patientID);
            let newRendezVous={
                "type_RDV":TypeRDV,
                "date_RDV":DateRDV,
                "temps_RDV":TempsRDV,
                "doctorID":Docteur,
                "patientID":patientID,
                "statut":Status,
                // "besoins_chambre":BesoinsChambre,
                // "departement":Departement,
                // "chambre":Chambre
            }
            const apiUrlRendezVous='http://127.0.0.1:8000/rendez-vous';
            try{
                const response=await axios.post(apiUrlRendezVous,newRendezVous);
                console.log('Response:', response);
                setMessageRendez_vous(response.data.message)
            }catch(error){
                console.log(error);
            }
            let newCompte={
                "email":Email,
                "mot_de_passe":"12345678",
                "role":"patient"
            }
            const apiUrlCompte='http://127.0.0.1:8000/comptes';
            try{
                const response=await axios.post(apiUrlCompte,newCompte);
                console.log('Response:', response);
                setMessageCompte(response.data.message)
            }catch(error){
                console.log(error);
            }
        }catch(error){
            console.error('Error:', error);

            // alert(error.message);
        }
        console.log('patientID:', patientID);
        let newRendezVous={
            "type_RDV":TypeRDV,
            "date_RDV":DateRDV,
            "temps_RDV":TempsRDV,
            "doctorID":Docteur,
            "patientID":patientID,
            "statut":Status,
            // "besoins_chambre":BesoinsChambre,
            // "departement":Departement,
            // "chambre":Chambre
        }
        const apiUrlRendezVous='http://127.0.0.1:8000/rendez-vous';
        try{
            const response=await axios.post(apiUrlRendezVous,newRendezVous);
            console.log('Response:', response);
        }catch(error){
            console.log(error);
        }
        let newCompte={
            "email":Email,
            "mot_de_passe":"12345678",
            "role":"patient"
        }
        const apiUrlCompte='http://127.0.0.1:8000/comptes';
        try{
// await axios.post('http://localhost:8000/api/patients', data);
            const response=await axios.post(apiUrlCompte, newCompte );
            console.log('Response:', response);
        }catch(error){
            console.log(error);
            setErrors(error.response.data);
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
                    <p>{messagePatient}</p>
                </div>
                <div className="message">
                    <p>{messageCompte}</p>
                </div>
                <div className="message">
                    <p>{messageRendez_vous}</p>
                </div>
            </section>
            <section id="errors">
                <p>{errors}</p>
            </section>
            <form action=""  onSubmit={AddPatient} id="forms">
                <section id="infoPatient" >
                    <h2>Les informations De Patient</h2>
                    
                    <article>
                        <label htmlFor="" >CIN</label>
                        <input type="text" name="" id="" onChange={(e)=>setCIN(e.target.value)} required />                        
                    </article>
                    <article>
                        <label htmlFor="">Nom</label> 
                        <input type="text" name="" id="" onChange={(e)=>setNom(e.target.value)} required />
                    </article>
                    <article>
                        <label htmlFor="">Prénom</label> 
                        <input type="text" name="" id="" onChange={(e)=>setPrenom(e.target.value)} required />
                    </article>
                    <article>
                        <label htmlFor="">Genre</label> 
                        <div>
                            <input type="radio"  value="feminin" name="genre" id="" defaultChecked onChange={(e)=>setGenre(e.target.value)} />
                            <label htmlFor="">Feminin</label>
                            <input type="radio" value="masculin" name="genre" id="" onChange={(e)=>setGenre(e.target.value)}  />
                            <label htmlFor="">Masculin</label>
                        </div>
                    </article>
                    <article>
                        <label htmlFor="">Date De Naissance</label> 
                        <input type="date" name="" id="" onChange={(e)=>setDateNaissance(e.target.value)} required />
                    </article>
                    <article>
                        <label htmlFor="">Adresse Email</label> 
                        <input type="text" name="" id="" onChange={(e)=>setEmail(e.target.value)} required />
                        
                    </article>
                    <article>
                        <label htmlFor="">Numéro De Téléphone</label> 
                        <input type="text" name="" id="" onChange={(e)=>setTel(e.target.value)} required />
                    </article>
                    <article>
                        <label htmlFor="">Adresse</label> 
                        <input type="text" name="" id="" onChange={(e)=>setAdresse(e.target.value)} required />
                    </article>
                </section>
                <section >
                    <section id="Rendez-vous">
                        <h2>Rendez-vous</h2>
                        <div>
                            <article>
                                <label htmlFor="">Type de rendez-vous</label>
                                <input type="text" name="" onChange={(e)=>setTypeRDV(e.target.value)} />
                                {errors.TypeRDV && <div className="error">{errors.TypeRDV[0]}</div>}
                            </article>
                            <article>
                                <label htmlFor="">Date de rendez-vous</label>
                                <input type="date" name="" onChange={(e)=>setDateRDV(e.target.value)} />
                                {errors.DateRDV && <div className="error">{errors.DateRDV[0]}</div>}
                            </article>
                            <article>
                                <label htmlFor="">Temps de rendez-vous</label>
                                <input type="time" name="" onChange={(e)=>setTempsRDV(e.target.value)} />
                            </article>
                        </div>
                        <div>
                            <article>
                                <label htmlFor="">Docteur</label>
                                <select name="docteur" id="" onChange={(e)=>setDocteur(e.target.value)} >
                                    {doctors.map((doctor)=>(
                                        <option key={doctor.id} value={doctor.id}>{doctor.nom} {doctor.prenom}</option>
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
                                        <input type="radio" value="programmé" name="status" id="" defaultChecked onChange={(e)=>setStatus(e.target.value)} />
                                        <label htmlFor="">Programmé</label>
                                        <input type="radio" value="confirmé" name="status" id="" onChange={(e)=>setStatus(e.target.value)} />
                                        <label htmlFor="">Confirmmé</label>
                                    </div>
                                    <div>
                                    <input type="radio" value="complété" name="status" id="" onChange={(e)=>setStatus(e.target.value)} />
                                    <label htmlFor="">Complété</label>
                                    <input type="radio" value="annulé" name="status" id="" onChange={(e)=>setStatus(e.target.value)} />
                                    <label htmlFor="">Annulé</label>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </section>
                    <section id="plusInfo">
                        <h2>Plus d'information</h2>
                        <div>
                            <article>
                                <label htmlFor="">Groupe sanguin</label>
                                <select name="" id="" onChange={(e)=>setSelectedBloodType(e.target.value)}>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                </select>
                            </article>
                            <article>
                                <label htmlFor="">Allergies</label>
                                <input type="text" name="" onChange={(e)=>setAllergies(e.target.value)} />
                            </article>
                            <article>
                                <label htmlFor="">Conditions médicales</label>
                                <input type="text" name="" onChange={(e)=>setConditionsMedicales(e.target.value)} />
                            </article>
                        </div>
                        <div>
                            <article>
                                <label htmlFor="">Besoins d'une chambre</label>
                                <div>
                                    <input type="radio" value="false" name="Besoin_chambre" id="" defaultChecked onChange={(e)=>setBesoinsChambre(e.target.value)} />
                                    <label htmlFor="">Non</label>
                                    <input type="radio" value="true" name="Besoin_chambre" id="" onChange={(e)=>setBesoinsChambre(e.target.value)} />
                                    <label htmlFor="">Oui</label>
                                </div>
                            </article>
                            {BesoinsChambre === "true" && (
                            <div id="chambre" hidden={BesoinsChambre? false : true}> 
                                <article>
                                    <label htmlFor="">Departement</label>
                                    <select name="departement" id="" onChange={(e)=>setDepartement(e.target.value)} >
                                        <option value="1">1</option>
                                    </select>
                                </article>
                                <article>
                                    <label htmlFor="">Chambre</label>
                                    <select name="chambre" id="" onChange={(e)=>setChambre(e.target.value)} >
                                        <option value="1">1</option>
                                    </select>
                                </article>
                            </div>
                            )}
                        </div>
                    </section>                   
                </section>
                <div id="btns">
                    <button  type="submit" >Enregister</button>
                    <button onClick={ClearForm} >Annuler</button>
                </div>
            </form>   
        </div>
    )
}
export default CreatePatientForm;