import './bootstrap';
import '../css/app.css';
import '../css/login.css';
import '../css/Technicien_labo.css/Profil.css';
import '../css/Receptionniste-css/home.css';
import '../css/Receptionniste-css/admission.css';
import '../css/patient-css/rendez_vous.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Home from './Components/Home/Home';
import Patient_route from './Components/Patient/patient-route';
import Rendez_vous from './Components/Patient/Rendez_vous';
import CreatePatientForm from './Components/Receptionniste/CreatePatientForm';
import Tech_profil from './Components/Technicien_labo/Profil/tech_profil';
import Login from './Components/Login/login';
import Tech_profil_modification from './Components/Technicien_labo/Profil_modification/tech_profil._modification.jsx';
import Tech_programme from './Components/Technicien_labo/Programme/tech_programme.jsx';

const App = () => {
    return (
        // <HashRouter>
        //     <Routes>
        //         <Route path="/" element={<Login />} />
        //         <Route path="/home" element={<Home />} />
        //         <Route path="/patient" element={<Patient_route />} />
        //         <Route path="/rendez-vous" element={<Rendez_vous />} />
        //         <Route path="/receptionnistes" element={<CreatePatientForm />} />
        //         <Route path="/tech-profil" element={<Tech_profil />} />
        //     </Routes>
        // </HashRouter>
        <Tech_programme/>
    );
}

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
