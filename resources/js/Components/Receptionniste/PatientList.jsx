import React, { useEffect, useState } from "react";
import Header from "./Header";
import SideMenu from "./SideMenu";
import SideBar from "./SideBar";
import { NavLink } from "react-router-dom";
import axios from "axios";
const PatientList=()=>{
    const [patients,setPatients]=useState([]);
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
            (patient.nom.toLowerCase().includes(searchTerm.toLowerCase()) || patient.prenom.toLowerCase().includes(searchTerm.toLowerCase())) &&
            (selectedGenre?patient.genre===selectedGenre:true) &&
            (selectedBloodType?patient.groupeSanguin===selectedBloodType:true)
        );
    });

    const patientsPerPage=10;
    const [currentPage, setCurrentPage]=useState(1);
    const totalPages=Math.ceil(filteredPatients.length/patientsPerPage);

    return(
        <div>
            <Header title="Patients" />
            <SideMenu/>
            <nav id="SideBar">
                <select name="" id="" onChange={(e)=>setSelectedGenre(e.target.value)}>
                    <option value="">Tous</option>
                    <option value="masculin">Masculin</option>
                    <option value="feminin">Féminin</option>
                </select>
                <select name="" id="" onChange={(e)=>setSelectedBloodType(e.target.value)}>
                    <option value="">Tous</option>
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
            <section id="patient-list">
                <table border={1}>
                    <th>ID</th>
                    <th>CIN</th>
                    <th>Nom & Prénom</th>
                    <th>Age</th>
                    <th>Genre</th>
                    <th>Téléphone</th>
                    <th>Groupe Sanguin</th>
                    <th>Action</th>
                    {filteredPatients.map((patient) => {
                    const birthDate = new Date(patient.date_Naissance);
                    const today = new Date();
                    let age = today.getFullYear() - birthDate.getFullYear();
                    const monthDiff = today.getMonth() - birthDate.getMonth();
                    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                        age--;
                    }
                    return (
                        <tr key={patient.id}>
                        <td>{patient.id}</td>
                        <td>{patient.CIN}</td>
                        <td>{patient.nom} {patient.prenom}</td>
                        <td>{age}</td> 
                        <td>{patient.genre}</td>
                        <td>{patient.tel}</td>
                        <td>{patient.groupeSanguin}</td>
                        <td>
                            <NavLink to={`/receptionnistes/admission/existant/${patient.id}`}>Modifier</NavLink>
                            <NavLink to={`/receptionnistes/admission/existant/${patient.id}`}>Supprimer</NavLink>
                        </td>
                        </tr>
                    );
                    })}
                </table>
            </section>
        </div>
    )
}
export default PatientList;