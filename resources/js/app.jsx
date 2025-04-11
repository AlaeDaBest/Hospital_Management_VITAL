import './bootstrap';
import '../css/app.css';
import '../css/login.css';
import '../css/home.css';


import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Components/Home/Home';
import Login from './Components/Login/login';
import { HashRouter, Route, Routes } from 'react-router-dom';

const App=()=>{
    return(
        <HashRouter>
            <Routes>

                <Route path="/" element={<  Login/>} />
                

            </Routes>
        </HashRouter>
    );
}

ReactDOM.createRoot(document.getElementById('app')).render(<App/>);