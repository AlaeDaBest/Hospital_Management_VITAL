import React, { useEffect, useState } from "react";
import Header from "./Header";
import SideMenu from "./SideMenu";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { BsTrashFill } from "react-icons/bs";
import axios from "axios";
const FactureList=()=>{
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedStatut, setSelectedStatut] = useState("");
    const [factures, setFactures] = useState([]);
    const navigate=useNavigate();
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/factures')
        .then(response=>{
            console.log(response);
            setFactures(response.data);
        }).catch(error=>console.log(error));
    },[]);
    let filteredFactures=factures.filter((facture)=>{
        return (
            (facture.patient_nom.toLowerCase().includes(searchTerm.toLowerCase()) || facture.patient_prenom.toLowerCase().includes(searchTerm.toLowerCase())) &&
            (selectedStatut?facture.statut===selectedStatut:true)
        );
    })
    const facturesPerPage=6;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(filteredFactures.length / facturesPerPage);
    const currentFactures = filteredFactures.slice((currentPage - 1) * facturesPerPage, currentPage * facturesPerPage);

    function DeleteFacture(facture){
        const apiUrl=`http://127.0.0.1:8000/factures/${facture.id}`;
        try{
            const response=axios.delete(apiUrl);
            console.log(response.data);
            setFactures(factures.filter((f)=>f.id!==facture.id));
        }catch(error){
            console.log(error);
        }
    }
    function EditFacture(facture){
        navigate(`/receptionnistes/facture/modifier`, { state: { facture: facture } });  
    }
    return(
        <div id="list-patient-container">
        <Header title="Factures" />
        <SideMenu/>
        <nav id="SideBar">             
           <select name="" id="" onChange={(e)=>setSelectedStatut(e.target.value)}>
                <option value="">Statut</option>
                <option value="payée">Payée</option>
                <option value="non payée">Non Payée</option>
           </select>
           
           
           <div id="add-rendez-vous">
                    <NavLink to='/receptionnistes/facture' className={({isActive})=>(isActive? 'active-admission-link':'')} >List</NavLink>
            </div>
            <div id="add-rendez-vous">
            <NavLink to='/receptionnistes/facture/ajouter' className={({isActive})=>(isActive? 'active-admission-link':'')}>Ajouter</NavLink>
           </div>
        </nav>
        <div id="search-patient">
            <label htmlFor="">Chercher :</label>
            <input type="text" placeholder="Rechercher par nom ou prénom" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
        </div>       
        <section id="patient-list">
            <table  id='patient-table' rules="all">
                {/* <thead> */}
                    <tr className="header-table">
                        <th>ID </th>
                        <th>Nom de patientN</th>
                        <th>Service</th>
                        <th>Date d'emission</th>
                        <th>Date de paiement</th>
                        <th>Montant</th>
                        <th>Statut</th>
                        <th>Action</th>
                    </tr>
                {/* </thead> */}
                <tbody>
                {currentFactures.map((facture) => {
                return (
                    <tr key={facture.id}>
                        <td>{facture.id} </td>
                        <td>{facture.patient_nom} {facture.patient_prenom}</td>
                        <td>{facture.description} </td>
                        <td>{facture.date_emission}</td> 
                        <td>{facture.date_paiement}</td>
                        <td>{facture.montant_total} </td>
                        <td><span className={facture.statut=="payée"?"payée":"nonpayée"} >{facture.statut}</span></td>
                        <td>
                            <FaEdit color="#244A6A" id="edit_icon" onClick={()=>EditFacture(facture)} />
                            <BsTrashFill color="#d32727" id="delete_icon" onClick={()=>DeleteFacture(facture)} />
                        </td>
                    </tr>
                );
                })}
                </tbody>
            </table>
            <div id="pagination-btns">
                <button onClick={()=>setCurrentPage(currentPage-1)} disabled={currentPage==1?true:false} >Précédent</button>
                <span> {currentPage} </span>
                <button onClick={()=>setCurrentPage(currentPage+1)} disabled={currentPage==totalPages?true:false}>Suivant</button>
            </div>
        </section>
    </div>
    )
}
export default FactureList;