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

const SideMenu=()=>{
    return(
        <nav id="SideMenu">
            <NavLink to="/patients/profile" className={({isActive})=>(isActive? 'active-menu-link':'')}>
                <section>
                    <div>
                    <IoPersonSharp  size={30} color="#244A6A" />
                    </div>
                    <div>
                        <p>Profile</p>
                    </div>
                </section>
            </NavLink>
            <NavLink to="/patients/rendez_vous/" className={({isActive})=>(isActive? 'active-menu-link':'')}>
                <section>
                    <div>
                        <BsPersonFillAdd size={30} color="#244A6A" />
                    </div>
                    <div>
                        <p>Rendez-vous</p>
                    </div>
                </section>
            </NavLink>
            <NavLink to="/patients/ordonnances/" className={({isActive})=>(isActive? 'active-menu-link':'')}>
                <section>
                    <div>
                        <FaPeopleGroup size={30} color="#244A6A" />
                    </div>
                    <div>
                        <p>Ordonnances</p>
                    </div>
                </section>
            </NavLink>
            <NavLink to="/patients/programme/" className={({isActive})=>(isActive? 'active-menu-link':'')}>
                <section>
                    <div>
                        <RiCalendarScheduleFill size={30} color="#244A6A" />
                    </div>
                    <div>
                        <p>Programme</p>
                    </div>
                </section>
            </NavLink>
            <NavLink to="/patients/historique_rendezVous/" className={({isActive})=>(isActive? 'active-menu-link':'')}>
                <section>
                    <div>
                        <SiRescuetime size={30} color="#244A6A" />
                    </div>
                    <div>
                        <p>Historique</p>
                    </div>
                </section>
            </NavLink>
            <NavLink to="/patients/analyses/" className={({isActive})=>(isActive? 'active-menu-link':'')}>
                <section>
                    <div>
                        <FaBed size={30} color="#244A6A" />
                    </div>
                    <div>
                        <p>Analyses</p>
                    </div>
                </section>
            </NavLink>
            <NavLink to="/patients/medecins" className={({isActive})=>(isActive? 'active-menu-link':'')}>
                <section>
                    <div>
                        <RiSurgicalMaskFill size={30} color="#244A6A" />
                    </div>
                    <div>
                        <p>Médecins</p>
                    </div>
                </section>
            </NavLink>
            <NavLink to="/patients/facture" className={({isActive})=>(isActive? 'active-menu-link':'')}>
                <section>
                    <div>
                        <FaFileInvoiceDollar size={30} color="#244A6A" />
                    </div>
                    <div>
                        <p>Facture</p>
                    </div>
                </section>
            </NavLink>
        </nav>
    )
}
export default SideMenu;