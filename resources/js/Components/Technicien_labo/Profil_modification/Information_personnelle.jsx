import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";


const Infromations_Personnelles = () => {
    const [technicien, setTechnicien]=useState({});
    const [id, setId] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [dateNaissance, setDateNaissance] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [adresse, setAdresse] = useState("");
  const [dateRecrutement, setDateRecrutement] = useState("");
    const [messageCompte, setMessageCompte] = useState("");
   
   
   
  const location=useLocation();

  useEffect(() => {
    const userFromState = location.state?.user;
  
    if (userFromState) {
      // Save to localStorage for later use
      localStorage.setItem("technicien_labo", JSON.stringify(userFromState));
      fillForm(userFromState);
    } else {
      // Try to load from localStorage
      const storedUser = localStorage.getItem("technicien_labo");
      if (storedUser) {
        fillForm(JSON.parse(storedUser));
      }
    }
  }, [location.state]);
  
  const fillForm = (user) => {
    setTechnicien(user);
    setId(user.id || '');
    setNom(user.nom || '');
    setPrenom(user.prenom || '');
    setDateNaissance(user.date_Naissance || '');
    setEmail(user.email || '');
    setTel(user.tel || '');
    setAdresse(user.adresse || '');
  };

  async function EditTechnicien(){
    const technicien_labo = JSON.parse(localStorage.getItem("technicien_labo"));
    console.log(technicien_labo);
    const apiUrl=`http://127.0.0.1:8000/comptes/${technicien_labo.id}`;
    let technicien={
      "id":id,
      "nom":nom,
      "prenom":prenom,
      "date_Naissance":dateNaissance,
      "email":email,
      "tel":tel,
      "adresse":adresse,
      "genre":"masculin",
      
    }
    try{
        const response=await axios.put(apiUrl,technicien);
        console.log(response);
        setMessageCompte(response.data.message);
    }catch(e){
        console.error(e);
    }
  }
  return (
    <div >
 <nav id="SideBar">
  
 <button className="logout-btn"  onClick={EditTechnicien}>Valider</button>
            </nav>
        <section className="container-p">
      <div className="Formulaire">
        <h1>Informations personnelles</h1>
        <form className="formulaire-flex" >
          <div className="form-row">
            <label>ID</label>
            <input type="text" className="inp" value={id} disabled />
          </div>
          <div className="form-row">
            <label>Nom</label>
            <input type="text" className="inp" value={nom} onChange={(e) => setNom(e.target.value)} />
          </div>
          <div className="form-row">
            <label>Prénom</label>
            <input type="text" className="inp" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
          </div>
          <div className="form-row">
            <label>Date de naissance</label>
            <input type="date" className="inp" value={dateNaissance} onChange={(e) => setDateNaissance(e.target.value)} />
          </div>
          <div className="form-row">
            <label>Email</label>
            <input type="email" className="inp" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-row">
            <label>Téléphone</label>
            <input type="text" className="inp" value={tel} onChange={(e) => setTel(e.target.value)} />
          </div>
          <div className="form-row">
            <label>Adresse</label>
            <input type="text" className="inp" value={adresse} onChange={(e) => setAdresse(e.target.value)} />
          </div>
          <div className="form-row">
            <label>Date de recrutement</label>
            <input type="text" className="inp" value={dateRecrutement} disabled />
          </div>
          
        </form>
        {messageCompte && <p style={{ color: "green", paddingTop: "1rem" }}>{messageCompte}</p>}
      </div>
    </section>
    </div>
  );
};

export default Infromations_Personnelles;
