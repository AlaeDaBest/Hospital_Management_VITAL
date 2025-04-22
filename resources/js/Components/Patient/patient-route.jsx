import React from 'react'; 
import { Route, Routes } from 'react-router-dom';
import Rendez_vous from './Rendez_vous';
import ProfileLayout from './ProfileLayout';
import Compte from './link-profile/compte';
import Documents from './link-profile/documents';
import AdresseMedicale from './link-profile/adresse';
import Notification from './link-profile/notification';
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
        
        {/* Routes du profil avec layout */}
        <Route path="/patients/profile" element={<ProfileLayout />}>
          <Route index element={<Compte />} />
          <Route path="documents" element={<Documents />} />
          <Route path="adresse-medicale" element={<AdresseMedicale />} />
          <Route path="notification" element={<Notification />} />
        </Route>
        
        <Route path="/appointments" element={<Historique />} />
        <Route path="/analyses" element={<AnalysisResults />} />
        <Route path="/medecins" element={<Doctors />} />
        <Route path="/facture" element={<Facture />} />
      </Routes>
    </>
  );
}

export default Patient_route;