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
import Profile_P from './Profile';
import Compte from './link-profile/Comptes';


function Patient_route() {
  return (
    <>
      <Logo />
      <Menu />
    <Routes>
      <Route path="/patients/rendez_vous" element={<Rendez_vous />} />
      <Route path="/patients/profile" element={<Profile_P />} />
      <Route path="/patients/historique_rendezVous" element={<Historique />} />
      <Route path="/patients/analyses" element={<AnalysisResults />} />
      <Route path="/patients/medecins" element={<Doctors />} />
      <Route path="/patients/facture" element={<Facture />} />
      <Route path="/patients/compte" element={<Compte />} />




      {/* Redirection vers /profile si route inconnue */}
      {/* <Route path="*" element={<Navigate to="/profile" replace />} /> */}
    </Routes>
    </>

  );
}

export default Patient_route;
