import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Header from "../Receptionniste/Header";
import SideMenu_P from "./SideMenu";

const Profile_M = () => {
    const [receptionniste,setReceptionniste]=useState({});
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
      // const [TempsRDV,setTempsRDV]=useState('');
      const [Password,setPassword]=useState('');
      const [Docteur,setDocteur]=useState(1);
      // const [TypeRE,setRaisonVisite]=useState('');
      const [Status,setStatus]=useState('programmé');
      const [GroupeSanguin,setGroupeSanguin]=useState('A+');
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
    const [date_Recrutement,setDate_Recrutement]=useState('');
    const [doctors,setDoctors]=useState([]);
  const location=useLocation();

  useEffect(() => {
    const userFromState = location.state?.user;
  
    if (userFromState) {
      // Save to localStorage for later use
      localStorage.setItem("receptionniste", JSON.stringify(userFromState));
      fillForm(userFromState);
    } else {
      // Try to load from localStorage
      const storedUser = localStorage.getItem("receptionniste");
      if (storedUser) {
        fillForm(JSON.parse(storedUser));
      }
    }
  }, [location.state]);
  
  const fillForm = (user) => {
    setReceptionniste(user);
    setCIN(user.CIN || '');
    setNom(user.nom || '');
    setPrenom(user.prenom || '');
    setDateNaissance(user.date_Naissance || '');
    setEmail(user.email || '');
    setGenre(user.genre || 'feminin');
    setTel(user.tel || '');
    setAdresse(user.adresse || '');
  };

  async function EditReceptionniste(){
    const receptionniste = JSON.parse(localStorage.getItem("receptionniste"));
    console.log(receptionniste);
    const apiUrl=`http://127.0.0.1:8000/comptes/${receptionniste.id}`;
    let Receptionniste={
      "CIN":CIN,
      "nom":Nom,
      "prenom":Prenom,
      "date_Naissance":DateNaissance,
      "email":Email,
      "tel":Tel,
      "adresse":Adresse,
      "genre":Genre
    }
    try{
        const response=await axios.put(apiUrl,Receptionniste);
        console.log(response);
        setMessageCompte(response.data.message);
    }catch(e){
        console.error(e);
    }
  }
  return (
    <div id="container">
        <Header title="Profile" />
        <SideMenu_P/>
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
        <form action="" id="forms">
        <div className="profile-picture-section">
            <div className="profile-picture">
              <img src="Images/Home/Doctors/doc2.jpg" alt="Profile" />
            </div>
            <button >Upload JPG/PNG (Max: 5 MB)</button>
        </div>  
        <section id="infoPatient" >
                    <h2>Les informations personnelles</h2>
                    
                    <article>
                        <label htmlFor="" >CIN</label>
                        <input type="text" name="" value={CIN} id="" onChange={(e)=>setCIN(e.target.value)} required />                        
                    </article>
                    <article>
                        <label htmlFor="">Nom</label> 
                        <input type="text" name="" value={Nom} id="" onChange={(e)=>setNom(e.target.value)} required />
                    </article>
                    <article>
                        <label htmlFor="">Prénom</label> 
                        <input type="text" name="" id="" value={Prenom} onChange={(e)=>setPrenom(e.target.value)} required />
                    </article>
                    <article>
                        <label htmlFor="">Genre</label> 
                        <div>
                            <input type="radio"  value="feminin" name="genre" id="" checked={Genre=="feminin"?true:false} onChange={(e)=>setGenre(e.target.value)} />
                            <label htmlFor="" >Feminin</label>
                            <input type="radio" value="masculin" name="genre" id="" checked={Genre=="masculin"?true:false}  onChange={(e)=>setGenre(e.target.value)}  />
                            <label htmlFor="">Masculin</label>
                        </div>
                    </article>
                    <article>
                        <label htmlFor="">Date De Naissance</label> 
                        <input type="date" name="" value={DateNaissance} id="" onChange={(e)=>setDateNaissance(e.target.value)} required />
                    </article>
                    <article>
                        <label htmlFor="">Adresse Email</label> 
                        <input type="text" name="" value={Email} id="" onChange={(e)=>setEmail(e.target.value)} required />
                        
                    </article>
                    <article>
                        <label htmlFor="">Numéro De Téléphone</label> 
                        <input type="text" name="" value={Tel} id="" onChange={(e)=>setTel(e.target.value)} required />
                    </article>
                    <article>
                        <label htmlFor="">Adresse</label> 
                        <input type="text" name="" value={Adresse} id="" onChange={(e)=>setAdresse(e.target.value)} required />
                    </article>
                  
                </section>
               
            </form>
            <div id="btns">
                <button onClick={EditReceptionniste}>Enregistrer</button>
                <button className="annuler">Annuler</button>
            </div>
    </div>
  );
};

export default Profile_M;