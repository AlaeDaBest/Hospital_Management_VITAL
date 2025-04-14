import './bootstrap';
import '../css/app.css';
import '../css/login.css';
import '../css/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
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
