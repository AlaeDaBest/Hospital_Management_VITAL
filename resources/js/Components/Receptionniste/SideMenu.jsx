import React from "react";
import { BsPersonFillAdd } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { SiRescuetime } from "react-icons/si";
import { FaBed } from "react-icons/fa";
import { RiSurgicalMaskFill } from "react-icons/ri";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const SideMenu=()=>{
    return(
        <nav id="SideMenu">
            <NavLink to="/receptionnistes/admission/" className={({isActive})=>(isActive? 'active-menu-link':'')}>
                <section>
                    <div>
                        <BsPersonFillAdd size={30} color="#244A6A" />
                    </div>
                    <div>
                        <p>Admission</p>
                    </div>
                </section>
            </NavLink>
            <NavLink to="/receptionnistes/patients/" className={({isActive})=>(isActive? 'active-menu-link':'')}>
                <section>
                    <div>
                        <FaPeopleGroup size={30} color="#244A6A" />
                    </div>
                    <div>
                        <p>Patients</p>
                    </div>
                </section>
            </NavLink>
            <NavLink to="/receptionnistes/programme/" className={({isActive})=>(isActive? 'active-menu-link':'')}>
                <section>
                    <div>
                        <RiCalendarScheduleFill size={30} color="#244A6A" />
                    </div>
                    <div>
                        <p>Programme</p>
                    </div>
                </section>
            </NavLink>
            <NavLink to="/receptionnistes/rendez_vous/" className={({isActive})=>(isActive? 'active-menu-link':'')}>
                <section>
                    <div>
                        <SiRescuetime size={30} color="#244A6A" />
                    </div>
                    <div>
                        <p>Rendez-vous</p>
                    </div>
                </section>
            </NavLink>
            <section>
                <div>
                    <FaBed size={30} color="#244A6A" />
                </div>
                <div>
                    <p>Gestion des lits</p>
                </div>
            </section>
            <section>
                <div>
                    <RiSurgicalMaskFill size={30} color="#244A6A" />
                </div>
                <div>
                    <p>Chirurgie</p>
                </div>
            </section>
            <section>
                <div>
                    <FaFileInvoiceDollar size={30} color="#244A6A" />
                </div>
                <div>
                    <p>Facture</p>
                </div>
            </section>
        </nav>
    )
}
export default SideMenu;