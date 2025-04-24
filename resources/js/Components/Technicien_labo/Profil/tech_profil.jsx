import React from "react";
import SideMenu from "./SideMenu";
import Header from "./Header";
// import SideBar from "./sideBar";
import Infromations_Personnelles from "./Information_personnelle";
import { useNavigate } from "react-router-dom";


const Tech_profil=()=>{
    // const navigate = useNavigate();

    // const handleModifierClick = () => {
    //   navigate('/tech_profil_modification',);
    // };
  
    // const handleLogout = async () => {
    //   try {
    //     await axios.post("http://127.0.0.1:8000/logout", {}, { withCredentials: true });
    //     navigate("/login");
    //   } catch (error) {
    //     console.error("Erreur lors de la déconnexion :", error);
    //   }
    // };
    return(
        <div className="container_P">
           
              <Header/>
              <SideMenu/>
              
              <Infromations_Personnelles/>
             
        </div>
      
    )
}
export default Tech_profil;