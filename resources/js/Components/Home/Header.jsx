import React from "react";
import { FaPhoneVolume } from "react-icons/fa";
import { NavLink,Link } from "react-router-dom";
const Header=()=>{
    return(
        <header>
            <section id="upper-header">
                <article className="header_article" id="title">
                    <img id="logo" src="Images/Home/Logo.png" alt="" />
                    <h1>VITAL</h1>
                </article>
                <article className="header_article" id="phone">
                    <FaPhoneVolume size="40" id="phone-icon" />
                    <p>+12 34567890</p>
                </article>
            </section>
            <nav id="nav">
                <section id="links"> 
                    <NavLink to="" >Acceuil</NavLink>
                    <NavLink to="" >À propos </NavLink>
                    <NavLink to="" >Services </NavLink>
                </section>
                <section id="button">
                    <Link to="/receptionnistes" id="connect_button">Se connecter</Link>
                </section>
            </nav>
        </header>
    )
}
export default Header;