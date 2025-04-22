import './bootstrap';
import '../css/app.css';
import '../css/login.css';

import '../css/Receptionniste-css/home.css';
import '../css/Receptionniste-css/admission.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../css/Receptionniste-css/patients.css';
import '../css/Technicien_labo.css/Profil.css'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from 'react';

import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Patient_route from './Components/Patient/patient-route';



import Tech_profil_modification from './Components/Technicien_labo/Profil_modification/tech_profil._modification';
import CreatePatientForm from './Components/Receptionniste/CreatePatientForm';
import Tech_profil from './Components/Technicien_labo/Profil/tech_profil';
import EditPatientForm from './Components/Receptionniste/EditPatientForm';
import PatientList from './Components/Receptionniste/PatientList';
import Login from './Components/Login/login';




import Home from './Components/Home/Home';

const App=()=>{
    return(
        <HashRouter>
            <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/tech_profil_modification" element={<Tech_profil_modification />} />
                <Route path="/receptionnistes/admission/nouveau" element={<CreatePatientForm/>} />
                <Route path="/receptionnistes/admission/existant" element={<EditPatientForm/>} />
                <Route path="/receptionnistes/patients/" element={<PatientList/>} />
                <Route path="/login" element={<Login/>} />
            </Routes>
            {/* <Patient_route /> */}
        </HashRouter>
    );
}
ReactDOM.createRoot(document.getElementById('app')).render(<App/>);

