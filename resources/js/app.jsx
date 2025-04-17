import './bootstrap';
import '../css/app.css';
import '../css/login.css';

import '../css/Receptionniste-css/home.css';
import '../css/Receptionniste-css/admission.css';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Patient_route from './Components/Patient/patient-route';

import CreatePatientForm from './Components/Receptionniste/CreatePatientForm';
import Home from './Components/Home/Home';


const App=()=>{
    return(
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/receptionnistes/a" element={<CreatePatientForm/>} />
            </Routes>
            <Patient_route />
        </HashRouter>
    );
}
ReactDOM.createRoot(document.getElementById('app')).render(<App/>);

