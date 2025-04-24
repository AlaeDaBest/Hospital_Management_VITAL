import React, { useEffect, useState } from "react";
import Header from "./Header";
import SideMenu from "./SideMenu";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEdit } from "react-icons/fa";
import { BsTrashFill } from "react-icons/bs";

const ListDoctor = () => {
  const [patients, setPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedBloodType, setSelectedBloodType] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/patients')
      .then((response) => {
        console.log(response);
        setPatients(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des patients :", error);
      });
  }, []);

  const filteredPatients = patients.filter((patient) => {
    const compte = patient.compte;
    if (!compte) return false;

    return (
      (compte.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
        compte.prenom.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedGenre ? compte.genre === selectedGenre : true) &&
      (selectedBloodType ? patient.groupeSanguin === selectedBloodType : true)
    );
  });

  const patientsPerPage = 6;
  const totalPages = Math.ceil(filteredPatients.length / patientsPerPage);
  const currentPatients = filteredPatients.slice((currentPage - 1) * patientsPerPage, currentPage * patientsPerPage);

  function EditPatient(patient) {
    navigate(`/receptionnistes/admission/existant`, { state: { patient: patient } });
  }

  async function DeletePatient(patient) {
    const apiUrl = `http://127.0.0.1:8000/patients/${patient.id}`;
    try {
      await axios.delete(apiUrl);
      setPatients(patients.filter((p) => p.id !== patient.id));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
    <style>{`
          #pagination-btns {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 15px;
            margin-top: 30px;
          }
  
          #pagination-btns button {
            padding: 8px 16px;
            border: none;
            background-color:  #1C4966;
            color: white;
            border-radius: 6px;
            cursor: pointer;
            font-size: 14px;
            transition: background-color 0.3s ease;
          }
  
          #pagination-btns button:disabled {
            background-color:  #1C4966;
            cursor: not-allowed;
          }
  
          #pagination-btns span {
            font-weight: bold;
            font-size: 16px;
          }
        `}</style>
   
    <div id="list-patient-container">
      <Header title="Patients" />
      <SideMenu />
      
      <nav id="SideBar">
            <div style={{ display: "flex", flexDirection: "column", gap: "15px", margin: "20px 0" }}>
              <select
                onChange={(e) => setSelectedGenre(e.target.value)}
                style={{ padding: "8px", borderRadius: "5px", border: "1px solid #1C4966", width: "90px", color: "#1C4966" }}
              >
                <option value="">Nom</option>
                <option value="masculin">Masculin</option>
                <option value="feminin">Féminin</option>
              </select>
  
              <select
                onChange={(e) => setSelectedBloodType(e.target.value)}
                style={{ padding: "8px", borderRadius: "5px", border: "1px solid #1C4966", width: "90px", color: "#1C4966" }}
              >
                <option value="">Specialite</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
          </nav>

      <div id="search-patient">
        <label>Chercher :</label>
        <input
          type="text"
          placeholder="Rechercher par nom ou prénom"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <section id="patient-list">
        <table id='patient-table' rules="all" width="100%">
          <thead>
            <tr className="header-table">
              <th>ID</th>
              <th>CIN</th>
              <th>Nom & Prénom</th>
              <th>Age</th>
              <th>Genre</th>
              <th>Téléphone</th>
              <th>Specialite</th>
              
            </tr>
          </thead>
          <tbody>
            {currentPatients.map((patient) => {
              if (!patient.compte) return null;

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
                  <td>Dermatologie</td>
               
                  
                </tr>
              );
            })}
          </tbody>
        </table>

        <div id="pagination-btns">
              <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
                Précédent
              </button>
              <span>{currentPage}</span>
              <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
                Suivant
              </button>
            </div>
      </section>
    </div>
    </>
  );
};

export default ListDoctor;
