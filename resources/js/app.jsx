import './bootstrap';
import '../css/app.css';
import '../css/login.css';



import '../css/Receptionniste-css/home.css';
import '../css/Receptionniste-css/admission.css';
import '../css/Receptionniste-css/patients.css';


import '../css/patient-css/rendez_vous.css';





import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";




import React, { useEffect, useState } from 'react';

import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Rendez_vous from './Components/Patient/Rendez_vous';
import CreatePatientForm from './Components/Receptionniste/CreatePatientForm';
import Home from './Components/Home/Home';
import EditPatientForm from './Components/Receptionniste/EditPatientForm';
import PatientList from './Components/Receptionniste/PatientList';


const App=()=>{
    return(
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/receptionnistes/admission/" element={<CreatePatientForm/>} />
                <Route path="/receptionnistes/admission/nouveau" element={<CreatePatientForm/>} />
                <Route path="/receptionnistes/admission/existant" element={<EditPatientForm/>} />
                <Route path="/receptionnistes/patients/" element={<PatientList/>} />
            </Routes>
        </HashRouter>
    );
}

ReactDOM.createRoot(document.getElementById('app')).render(<App/>);
