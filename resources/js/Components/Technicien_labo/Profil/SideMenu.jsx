import React from "react";
import { FaUser } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { SiRescuetime } from "react-icons/si";
import { FaBed } from "react-icons/fa";
import { RiSurgicalMaskFill } from "react-icons/ri";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { RiHealthBookFill } from "react-icons/ri";

import { CiMedicalClipboard } from "react-icons/ci";

const SideMenu=()=>{
    return(
        <nav id="SideMenu" style={{ gap: "20px"}}>
             <NavLink to="/tech_labo" className={({isActive})=>(isActive? 'active-menu-link':'')}>
           <section >
            <div >
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
        </nav>
    )
}
export default SideMenu;