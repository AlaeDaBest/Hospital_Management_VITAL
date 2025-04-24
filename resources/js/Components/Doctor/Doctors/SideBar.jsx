import React from "react";
import { NavLink } from "react-router-dom";
// import "../../../css/Receptionniste-css/admission.css";
const SideBar=()=>{
    return(
       <nav id="SideBar">
            <NavLink to="/receptionnistes/admission/nouveau"  className={({isActive})=>(isActive? 'active-admission-link':'')} >Nouveau</NavLink> 
            <br />
            <NavLink to="/receptionnistes/admission/existant" className={({isActive})=>(isActive? 'active-admission-link':'')}>Existant</NavLink>
       </nav>
    )
}
export default SideBar;
/*
<NavLink 
    to="/receptionnistes/admission" 
    className={({ isActive }) => (isActive ? styles.active : '')}
>
    Nouveau
</NavLink>
<br />
<NavLink 
    to="/receptionnistes/admission/existant" 
    className={({ isActive }) => (isActive ? styles.active : '')}
>
    Existant
</NavLink>*/