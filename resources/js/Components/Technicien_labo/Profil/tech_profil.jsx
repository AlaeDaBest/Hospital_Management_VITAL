import React from "react";
import SideMenu from "./SideMenu";
import Header from "./Header";
import SideBar from "./sideBar";
import Infromations_Personnelles from "./Information_personnelle";


const Tech_profil=()=>{
    return(
        <div className="container_P">
           
              <Header/>
              <SideMenu/>
              <SideBar/>
              <Infromations_Personnelles/>
             
        </div>
      
    )
}
export default Tech_profil;