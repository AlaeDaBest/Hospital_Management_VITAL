import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Rendez_vous from './Rendez_vous';
import Profile from './Profile';
import Historique from './historique';
import AnalysisResults from './analyse';
import Doctors from './medecins';
import Logo from './header/logo';
import Menu from './header/menu';
import Facture from './facture';


function Patient_route() {
  return (
    <>
      <Logo />
      <Menu />
    <Routes>
      <Route path="/rendez_vous" element={<Rendez_vous />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/historique_rendezVous" element={<Historique />} />
      <Route path="/analyses" element={<AnalysisResults />} />
      <Route path="/medecins" element={<Doctors />} />
      <Route path="/facture" element={<Facture />} />




      {/* Redirection vers /profile si route inconnue */}
      {/* <Route path="*" element={<Navigate to="/profile" replace />} /> */}
    </Routes>
    </>

  );
}

export default Patient_route;
