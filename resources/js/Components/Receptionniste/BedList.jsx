import React, { useEffect, useState } from "react";
import Header from "./Header";
import SideMenu from "./SideMenu";
import axios from "axios";
const BedList=()=>{
    const [departements,setDepartements]=useState([]);
    const [message,setMessage]=useState("");
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/lits/')
        .then((response)=>{
            console.log(response);
            setDepartements(response.data);
        }).catch(error=>console.log(error));
    },[]);
    const [disponibilite,setDisponibilite]=useState(true);
    async function ToggleDisponibilite(lit){
        const apiUrl=`http://127.0.0.1:8000/lits/${lit.id}`;
        try{
            const response=await axios.put(apiUrl,{
                ...lit,
                disponibilite:!lit.disponibilite
            });
            setMessage(response.data.message);
            console.log(response);
            setDepartements(departements.map(dep=>{
                return {
                    ...dep,
                    chambres:dep.chambres.map(chambre=>{
                        return {
                            ...chambre,
                            lits:chambre.lits.map(l=>{
                                if(l.id===lit.id){
                                    return {...l,disponibilite:!lit.disponibilite}
                                }
                                return l;
                            })
                        }
                    })
                }
            }))
        }catch(error){
            console.log(error);
        }
    }
    const patientsPerPage=3;
    const [currentPage, setCurrentPage]=useState(1);
    const totalPages=Math.ceil(departements.length/patientsPerPage);
    const currentDepartements=departements.slice((currentPage-1)*patientsPerPage,currentPage*patientsPerPage);
    return(
        <div id="list-patient-container">
            <Header title="Lits" />
            <SideMenu/>
            <nav id="SideBar">
                <select name="" id="">
                    <option value="">Departement</option>
                    <option value="1">Urgence</option>
                    <option value="1">Cardiologie</option>
                </select>
                <select name="" id="">
                    <option value="">Disponibilité</option>
                    <option value="1">Disponible</option>
                    <option value="2">Indisponible</option>
                </select>
            </nav>
            <div className="message" id="message_lit">
                <p>{message}</p>
            </div>
            <section id="patient-list" >
                <table id="patient-table" className="bed_table" rules="all">
                <thead>
                    <tr className="header-table">
                        <th>Département</th>
                        <th>Chambre</th>
                        <th>Lit</th>
                        <th>Disponibilité</th>
                    </tr>
                    </thead>
                    <tbody>
                    {currentDepartements.map(dep =>
                        dep.chambres.map(chambre =>
                        chambre.lits.map((lit, index) => (
                            <tr key={`lit-${lit.id}`}>
                            <td>{index === 0 ? dep.nom : ''}</td>
                            <td>{index === 0 ? `Chambre ${chambre.id}` : ''}</td>
                            <td>Lit {lit.id}</td>
                            <td> 
                                <select name="" id="" onChange={(e)=>ToggleDisponibilite(lit)} >
                                    <option value={true} selected={lit.disponibilite==true?true:false} >Disponible</option>
                                    <option value={false} selected={lit.disponibilite==true?false:true}>Indisponible</option>
                                </select>
                            </td>
                            </tr>
                        ))
                        )
                    )}
                    </tbody>
                </table>      
                <div id="pagination-btns" className="lit-btns ">
                    <button onClick={()=>setCurrentPage(currentPage-1)} disabled={currentPage==1?true:false} >Précédent</button>
                    <span> {currentPage} </span>
                    <button onClick={()=>setCurrentPage(currentPage+1)} disabled={currentPage==totalPages?true:false}>Suivant</button>
                </div>                   
            </section>
           
        </div>
    )
}
export default BedList;