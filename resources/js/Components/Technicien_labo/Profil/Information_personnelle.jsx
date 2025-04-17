import React from "react";
const Infromations_Personnelles=()=>{
 return(
 <section className="container-p">
       <div className="Formulaire">
        <h1>Informations personnelles</h1>
       <form action="">
       <label>ID</label><br />
        <input type="text" disabled  className="inp"/><br />
        <label>Service</label><br />
        <select name="" id="" className="inp"><br/>
            <option value="Microbiologie ">Microbiologie </option>
            <option value="Biochimie ">Biochimie </option>
            <option value="Hématologique">Hématologique</option>
        </select><br />
        <label>Nom</label><br />
        <input type="text" className="inp" required/><br />
        <label>Prenom</label><br />
        <input type="text" className="inp"/><br />
        <label>Genre</label><br />
        <input type="radio" name="" id="" />Homme
        <input type="radio" name="" id="" />Femme <br />
        <label>Date de Recrutement</label><br />
        <input type="text" name="" id=""  disabled value='18/6/2021' className="inp"/><br />
        <label>Adresse Email</label><br />
        <input type="text" className="inp" /><br />
        <label>Telephone</label><br />
        <input type="text" className="inp" />
       
       </form>
    </div>
 </section>
 )
}
export default Infromations_Personnelles;