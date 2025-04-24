import React from "react";
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
            <NavLink to="/medecins/profile" className={({isActive})=>(isActive? 'active-menu-link':'')}>
                <section>
                    <div>
                    <IoPersonSharp  size={30} color="#244A6A" />
                    </div>
                    <div>
                        <p>Profile</p>
                    </div>
                </section>
            </NavLink>
            <NavLink to="/medecins/patients/" className={({isActive})=>(isActive? 'active-menu-link':'')}>
                <section>
                    <div>
                        <FaPeopleGroup size={30} color="#244A6A" />
                    </div>
                    <div>
                        <p>Patients</p>
                    </div>
                </section>
            </NavLink>
            <NavLink to="/medecins/chirurgies" className={({isActive})=>(isActive? 'active-menu-link':'')}>
                <section>
                    <div>
                        <RiSurgicalMaskFill size={30} color="#244A6A" />
                    </div>
                    <div>
                        <p>Chirurgie</p>
                    </div>
                </section>
            </NavLink>
            <NavLink to="/medecins/rendez_vous" className={({isActive})=>(isActive? 'active-menu-link':'')}>
                <section>
                    <div>
                        <FaUserDoctor size={30} color="#244A6A" />
                    </div>
                    <div>
                        <p>Rendez-vous</p>
                    </div>
                </section>
            </NavLink>
            <NavLink to="/medecins/doctors" className={({isActive})=>(isActive? 'active-menu-link':'')}>
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