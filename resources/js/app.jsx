import './bootstrap';
import '../css/app.css';
import '../css/login.css';
<<<<<<< HEAD
import '../css/home.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
=======


import '../css/Receptionniste-css/home.css';
import '../css/Receptionniste-css/admission.css';

>>>>>>> origin/main
import '../css/patient-css/rendez_vous.css';





import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
<<<<<<< HEAD
=======



import React, { useEffect, useState } from 'react';
>>>>>>> origin/main
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
<<<<<<< HEAD
import Home from './Components/Home/Home';
import Patient_route from './Components/Patient/patient-route';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* Routes Patient (intégrées ici sans autre Router) */}
      <Patient_route />
    </HashRouter>
  );
};
ReactDOM.createRoot(document.getElementById('app')).render(<App />);
=======
import Rendez_vous from './Components/Patient/Rendez_vous';
import CreatePatientForm from './Components/Receptionniste/CreatePatientForm';


const App=()=>{
    return(
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/receptionnistes" element={<CreatePatientForm/>} />
            </Routes>
        </HashRouter>
    );
}

ReactDOM.createRoot(document.getElementById('app')).render(<App/>);
>>>>>>> origin/main
