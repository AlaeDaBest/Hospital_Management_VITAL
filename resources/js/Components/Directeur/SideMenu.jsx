import React from "react";
<<<<<<< HEAD
import { FaUserDoctor } from "react-icons/fa6";
import { FaFileMedical } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { RiCalendarScheduleFill } from "react-icons/ri";


// import { SiRescuetime } from "react-icons/si";
// import { FaBed } from "react-icons/fa";
// import { RiSurgicalMaskFill } from "react-icons/ri";
// import { FaFileInvoiceDollar } from "react-icons/fa";
// import { RiHealthBookFill } from "react-icons/ri";


import { CiMedicalClipboard } from "react-icons/ci";

const SideMenu=()=>{
    return(
        <nav id="SideMenu" style={{ gap: "20px"}}>
           <section >

            <div >

                    <FaUserDoctor  size={30} color="#244A6A" />
                </div>
                <div>
                    <p>Docteurs</p>
                </div>
            </section>
            <section style={{ backgroundColor: "#63D8D2"}}>
                <div>
                    <FaFileMedical size={30} color="#244A6A" />
                </div>
                <div>
                    <p>Rapport</p>
                </div>
            </section>
            <section >
                <div  >
                    <FaPeopleGroup  size={30} color="#244A6A" />
                </div>
                <div>
                    <p>Patients</p>
                </div>
            </section>
            <section>
                <div>
                     <RiCalendarScheduleFill size={30} color="#244A6A" />
                </div>
                <div>
                    <p>Programme</p>
                </div>
            </section>
        
           
        </nav>
    )
}
export default SideMenu;
=======
import { BsPersonFillAdd } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { SiRescuetime } from "react-icons/si";
import { FaBed } from "react-icons/fa";
import { RiSurgicalMaskFill } from "react-icons/ri";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { FaUserDoctor } from "react-icons/fa6";

const SideMenu_P=()=>{
    return(
        <nav id="SideMenu">
            <NavLink to="/directeurs/profile" className={({isActive})=>(isActive? 'active-menu-link':'')}>
                <section>
                    <div>
                    <IoPersonSharp  size={30} color="#244A6A" />
                    </div>
                    <div>
                        <p>Profile</p>
                    </div>
                </section>
            </NavLink>
            <NavLink to="/directeurs/patients/" className={({isActive})=>(isActive? 'active-menu-link':'')}>
                <section>
                    <div>
                        <FaPeopleGroup size={30} color="#244A6A" />
                    </div>
                    <div>
                        <p>Patients</p>
                    </div>
                </section>
            </NavLink>
            <NavLink to="/directeurs/chirurgies" className={({isActive})=>(isActive? 'active-menu-link':'')}>
                <section>
                    <div>
                        <RiSurgicalMaskFill size={30} color="#244A6A" />
                    </div>
                    <div>
                        <p>Chirurgie</p>
                    </div>
                </section>
            </NavLink>
            <NavLink to="/directeurs/doctors" className={({isActive})=>(isActive? 'active-menu-link':'')}>
                <section>
                    <div>
                        <FaUserDoctor size={30} color="#244A6A" />
                    </div>
                    <div>
                        <p>Docteurs</p>
                    </div>
                </section>
            </NavLink>
        </nav>
    )
}
export default SideMenu_P;
>>>>>>> 90fa4aaa0faad32f045ddd81a1bccb19bb09a6d4
