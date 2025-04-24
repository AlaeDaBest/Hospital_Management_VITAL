import React, { useEffect, useState } from "react";
import Header from "./Header";
import SideMenu from "./SideMenu";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CiSquarePlus } from "react-icons/ci";
// import { FaEdit } from "react-icons/fa";
// import { BsTrashFill } from "react-icons/bs";

const Resultat = () => {

  
    return (
      <>
      
  
        <div id="list-patient-container">
          <Header title="Patients" />
          <SideMenu />
  
          <nav id="SideBar">
            <div style={{ display: "flex", flexDirection: "column", gap: "15px", margin: "20px 0" }}>
              <button className="add-btn"> Ajouter <CiSquarePlus size="20px" /></button>
  
             
                
            </div>
          </nav>
          <div className="all">
                <div className="all-p">
                    <p>Nom:Imane Lyachouti</p>
                    <p>PatientID:KB333</p>
                    <p>Test ID:1</p>
                </div>
                <div className="all-p">
                    <p>Date:12/04/2025</p>
                    <p>Service:Microbiologie</p>
                    <p>Type de prelevement:Sanguin </p>
                </div>
            </div>
  
          {/* <section id="patient-list"> */}
            <table id="patient-table" rules="all" width="100%" >
              <thead>
                <tr className="header-table">
                <th>Prelevelement</th>
                  <th>Parametre</th>
                  <th>Val.trouve</th>
                  <th>Val.reference</th>
                  <th>Unite</th>
                  <th>Observation</th>
                </tr>
              </thead>
              <tbody>
               <tr >
                      <td>LCR</td>
                      <td>Ig totales</td>
                      <td>7</td>
                      <td>6.3-33.9</td>
                      <td>g/l</td>
                      <td>Normal</td>
                      
                    </tr>
                    <tr >
                      <td>Urine</td>
                      <td>Ig totales</td>
                      <td>380</td>
                      <td>400-800</td>
                      <td>mg/24h</td>
                      <td>Bas</td>
                      
                    </tr>
                  
              </tbody>
            </table>
          {/* </section> */}
         </div>
         <div className="inter">
            <h3 className="inter-h">Interpretation</h3>
            <textarea name="" id=""></textarea>
            <div className="button-c"> <button className="modifier-btn">Télécharger</button>
            <button className="logout-btn">Valider</button></div>
           
            </div>
      </>
    );
  };
export default   Resultat;
