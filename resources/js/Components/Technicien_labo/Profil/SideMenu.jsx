import React from "react";
import { FaUser } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { SiRescuetime } from "react-icons/si";
import { FaBed } from "react-icons/fa";
import { RiSurgicalMaskFill } from "react-icons/ri";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { RiHealthBookFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

import { CiMedicalClipboard } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const SideMenu=()=>{
    return(
<<<<<<< HEAD
        <nav id="SideMenu" style={{ gap: "20px"}}>
             <NavLink to="/tech_labo" className={({isActive})=>(isActive? 'active-menu-link':'')}>
           <section >

            <div >

=======
        <nav id="SideMenu">
            <NavLink to="/tech_labo" className={({isActive})=>(isActive? 'active-menu-link':'')}>
            <section>
                <div>
>>>>>>> 90fa4aaa0faad32f045ddd81a1bccb19bb09a6d4
                    <FaUser size={30} color="#244A6A" />
                </div>
                <div>
                    <p>Profil</p>
                </div>
                
            </section>
            </NavLink>
            <NavLink to="/tech_programme" className={({isActive})=>(isActive? 'active-menu-link':'')}>
            <section>
                <div>
                    <RiCalendarScheduleFill size={30} color="#244A6A" />
                </div>
                <div>
                    <p>Programme</p>
                </div>
            </section>
            </NavLink>
            <NavLink to="/tech_patient" className={({isActive})=>(isActive? 'active-menu-link':'')}>
            <section>
                <div>
                    <FaPeopleGroup  size={30} color="#244A6A" />
                </div>
                <div>
                    <p>Patients</p>
                </div>
            </section>
            </NavLink>
            <NavLink to="/tech_resultat" className={({isActive})=>(isActive? 'active-menu-link':'')}>
            <section>
                <div>
                    <  RiHealthBookFill size={30} color="#244A6A" />
                </div>
                <div>
                    <p>Resultat</p>
                </div>
            </section>
            </NavLink>
<<<<<<< HEAD
        
           
=======
>>>>>>> 90fa4aaa0faad32f045ddd81a1bccb19bb09a6d4
        </nav>
    )
}
export default SideMenu;