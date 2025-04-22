import React, { useEffect, useState } from "react";
import Header from "./Header";
import SideMenu from "./SideMenu";
import SideBar from "./SideBar";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEdit } from "react-icons/fa";
import { BsTrashFill } from "react-icons/bs";
import EditRendezVous from "./EditRendezVous";

const RendezVousList=()=>{
    const [rendezVouses,setrendezVouses]=useState([]);
    const navigate=useNavigate();
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/rendez_vouss')
        .then((response)=>{
            console.log(response);
            setrendezVouses(response.data);
        });
    },[]);

    const [searchTerm, setSearchTerm]=useState("");
    const [selectedStatus, setSelectedStatus]=useState("");
    const [selectedType, setSelectedType]=useState("");
    
    let filteredRendezvous=rendezVouses.filter((rdv)=>{
        return (
            (rdv.patient_nom.toLowerCase().includes(searchTerm.toLowerCase()) || rdv.patient_prenom.toLowerCase().includes(searchTerm.toLowerCase())) &&
            (selectedStatus?rdv.statut===selectedStatus:true) &&
            (selectedType?rdv.type_RDV===selectedType:true)
        );
    });

    const patientsPerPage=6;
    const [currentPage, setCurrentPage]=useState(1);
    const totalPages=Math.ceil(filteredRendezvous.length/patientsPerPage);
    const currentRendezVouses=filteredRendezvous.slice((currentPage-1)*patientsPerPage,currentPage*patientsPerPage);
    function EditRendezVous(rdv){
        navigate(`/receptionnistes/rendez_vous/modifier`, { state: { rdv: rdv } });
    }
    async function DeleteRendezVous(rdv){
        console.log(rdv)
        const apiUrl=`http://127.0.0.1:8000/rendez_vouss/${rdv.id}`;
        try{
            const response=await axios.delete(apiUrl);
            console.log(response.data);
            setrendezVouses(rendezVouses.filter((p)=>p.id!==rdv.id)); 
        }catch(error){
            console.log(error);
        }
    }
    return(
        <div id="list-patient-container">
            <Header title="RV" />
            <SideMenu/>
            <nav id="SideBar">
                <select name="" id="" onChange={(e)=>setSelectedStatus(e.target.value)}>
                    <option value="">Statut</option>
                    <option value="programmé">Programmé</option>
                    <option value="confirmé">Confirmé</option>
                    <option value="complété">Complété</option>
                    <option value="anuulé">Annulé</option>
                </select>
                <select name="" id="" onChange={(e)=>setSelectedType(e.target.value)}>
                    <option value="">Type</option>
                    <option value="consultation">Consultation</option>
                    <option value="idk">Idk</option>
                </select>
                <div id="add-rendez-vous">
                <Link to='/receptionnistes/rendez_vous/ajouter' >Ajouter</Link>
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
                            <th>Nom Patient</th>
                            <th>Date de rendez-vousN</th>
                            <th>Heure</th>
                            <th>Type</th>
                            <th>Docteur</th>
                            <th>Statut</th>
                            <th>Action</th>
                        </tr>
                    {/* </thead> */}
                    <tbody>
                    {currentRendezVouses.map((rdv) => {
                    return (
                        <tr key={rdv.id}>
                            <td>{rdv.patient_nom} {rdv.patient_prenom}</td>
                            <td>{rdv.date_RDV} </td>
                            <td>{rdv.temps_RDV}</td> 
                            <td>{rdv.type_RDV}</td>
                            <td>{rdv.doctor_nom} {rdv.doctor_prenom}</td>
                            <td>{rdv.statut}</td>
                            <td>
                                <FaEdit color="#244A6A" id="edit_icon" onClick={()=>EditRendezVous(rdv)} />
                                <BsTrashFill color="#d32727" id="delete_icon" onClick={()=>DeleteRendezVous(rdv)} />
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
export default RendezVousList;