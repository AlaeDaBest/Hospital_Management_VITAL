import React, { useState } from "react";
import Header from "./Header";
import SideMenu from "./SideMenu";
const CreatePatientForm=()=>{
    const [title,setTitle]=useState('Admission');
    return(
        <div id="container">
            <Header title={title} />
            <SideMenu/>
            <main id="forms">
                <section id="infoPatient" >
                    <h2>Les informations De Patient</h2>
                    <article>
                        <label htmlFor="" >ID</label>
                        <input type="text" name="" id="" />
                    </article>
                    <article>
                        <label htmlFor="" >CIN</label>
                        <input type="text" name="" id="" />
                    </article>
                    <article>
                        <label htmlFor="">Nom</label> 
                        <input type="text" name="" id="" />
                    </article>
                    <article>
                        <label htmlFor="">Prénom</label> 
                        <input type="text" name="" id="" />
                    </article>
                    <article>
                        <label htmlFor="">Genre</label> 
                        <div>
                            <input type="radio" name="genre" id="" />
                            <label htmlFor="">Feminin</label>
                            <input type="radio" name="genre" id="" />
                            <label htmlFor="">Masculin</label>
                        </div>
                    </article>
                    <article>
                        <label htmlFor="">Date De Naissance</label> 
                        <input type="date" name="" id="" />
                    </article>
                    <article>
                        <label htmlFor="">Adresse Email</label> 
                        <input type="text" name="" id="" />
                    </article>
                    <article>
                        <label htmlFor="">Numéro De Téléphone</label> 
                        <input type="text" name="" id="" />
                    </article>
                </section>
                <section id="Rendez-vous">
                    <article>
                        <label htmlFor="">Hiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</label>
                        <input type="text" />
                    </article>
                </section>
            </main>
        </div>
    )
}
export default CreatePatientForm;