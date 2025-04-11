import './bootstrap';
import '../css/app.css';
import '../css/login.css';
import '../css/home.css';

import '../css/patient-css/rendez_vous.css';

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Components/Home/Home';
import Login from './Components/Login/login';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Rendez_vous from './Components/Patient/Rendez_vous';

const App=()=>{
    return(
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
            </Routes>
        </HashRouter>
    );
}

ReactDOM.createRoot(document.getElementById('app')).render(<App/>);