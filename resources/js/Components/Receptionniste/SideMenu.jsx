import React from "react";
import { BsPersonFillAdd } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { SiRescuetime } from "react-icons/si";
import { FaBed } from "react-icons/fa";
import { RiSurgicalMaskFill } from "react-icons/ri";
import { FaFileInvoiceDollar } from "react-icons/fa";

const SideMenu=()=>{
    return(
        <nav id="SideMenu">
            <section>
                <div>
                    <BsPersonFillAdd size={30} color="#244A6A" />
                </div>
                <div>
                    <p>Admission</p>
                </div>
            </section>
            <section>
                <div>
                    <FaPeopleGroup size={30} color="#244A6A" />
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
            <section>
                <div>
                    <SiRescuetime size={30} color="#244A6A" />
                </div>
                <div>
                    <p>Rendez-vous</p>
                </div>
            </section>
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