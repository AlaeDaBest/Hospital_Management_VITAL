import React from "react";
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