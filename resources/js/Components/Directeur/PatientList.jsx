import React, { useEffect, useState } from "react";
import Header from "../Receptionniste/Header";
import SideMenu from "./SideMenu";
// import SideBar from "./SideBar";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEdit } from "react-icons/fa";
import { BsTrashFill } from "react-icons/bs";

const PatientList_P=()=>{
    const [patients,setPatients]=useState([]);
    const navigate=useNavigate();
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/patients')
        .then((response)=>{
            console.log(response);
            setPatients(response.data);
        });
    },[]);

    const [searchTerm, setSearchTerm]=useState("");
    const [selectedGenre, setSelectedGenre]=useState("");
    const [selectedBloodType, setSelectedBloodType]=useState("");
    
    let filteredPatients=patients.filter((patient)=>{
        return (
            (patient.compte.nom.toLowerCase().includes(searchTerm.toLowerCase()) || patient.compte.prenom.toLowerCase().includes(searchTerm.toLowerCase())) &&
            (selectedGenre?patient.compte.genre===selectedGenre:true) &&
            (selectedBloodType?patient.groupeSanguin===selectedBloodType:true)
        );
    });

    const patientsPerPage=6;
    const [currentPage, setCurrentPage]=useState(1);
    const totalPages=Math.ceil(filteredPatients.length/patientsPerPage);
    const currentPatients=filteredPatients.slice((currentPage-1)*patientsPerPage,currentPage*patientsPerPage);

    function EditPatient(patient){
        navigate(`/receptionnistes/admission/existant`, { state: { patient: patient } });
    }
    async function DeletePatient(patient){
        const apiUrl=`http://127.0.0.1:8000/patients/${patient.id}`; 
        try{
            const response=await axios.delete(apiUrl);
            console.log(response);
            setPatients(patients.filter((p)=>p.id!==patient.id));
        }catch(error){
            console.log(error);
        }
    }
    return(
        <div id="list-patient-container">
            <Header title="Patients" />
            <SideMenu/>
            <nav id="SideBar">
                <select name="" id="" onChange={(e)=>setSelectedGenre(e.target.value)}>
                    <option value="">Genre</option>
                    <option value="masculin">Masculin</option>
                    <option value="feminin">Féminin</option>
                </select>
                <select name="" id="" onChange={(e)=>setSelectedBloodType(e.target.value)}>
                    <option value="">Groupe Sanguin</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                </select>
            </nav>
            <div id="search-patient">
                <label htmlFor="">Chercher :</label>
                <input type="text" placeholder="Rechercher par nom ou prénom" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
            </div>
            <section id="patient-list">
                <table  id='patient-table' rules="all">
                    {/* <thead> */}
                        <tr className="header-table">
                            <th>ID</th>
                            <th>CIN</th>
                            <th>Nom & Prénom</th>
                            <th>Age</th>
                            <th>Genre</th>
                            <th>Téléphone</th>
                            <th>Email</th>
                            <th>Groupe Sanguin</th>
                        </tr>
                    {/* </thead> */}
                    <tbody>
                    {currentPatients.map((patient) => {
                    const birthDate = new Date(patient.compte.date_Naissance);
                    const today = new Date();
                    let age = today.getFullYear() - birthDate.getFullYear();
                    const monthDiff = today.getMonth() - birthDate.getMonth();
                    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                        age--;
                    }
                    return (
                        <tr key={patient.id}>
                            <td>{patient.id}</td>
                            <td>{patient.compte.CIN}</td>
                            <td>{patient.compte.nom} {patient.compte.prenom}</td>
                            <td>{age}</td> 
                            <td>{patient.compte.genre}</td>
                            <td>{patient.compte.tel}</td>
                            <td>{patient.compte.email}</td>
                            <td>{patient.groupeSanguin}</td>
                            
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
export default PatientList_P;