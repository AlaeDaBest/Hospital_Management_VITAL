import './bootstrap';
import '../css/app.css';
import '../css/login.css';

import '../css/Receptionniste-css/home.css';
import '../css/Receptionniste-css/admission.css';
import '../css/Receptionniste-css/patients.css';
import '../css/Technicien_labo.css/Profil.css'
import '../css/Technicien_labo.css/programme.css'
import '../css/Technicien_labo.css/resultat.css'
import '../css/rapport.css'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Patient_route from './Components/Patient/patient-route';
import Tech_profil_modification from './Components/Technicien_labo/Profil_modification/tech_profil._modification';
import CreatePatientForm from './Components/Receptionniste/CreatePatientForm';
import Tech_profil from './Components/Technicien_labo/Profil/tech_profil';
import EditPatientForm from './Components/Receptionniste/EditPatientForm';
import PatientList from './Components/Receptionniste/PatientList';
import Login from './Components/Login/login';
import Home from './Components/Home/Home';
import Tech_programme from './Components/Technicien_labo/Programme/tech_programme';

import RendezVousList from './Components/Receptionniste/RendezVousList';
import RendezVousForm from './Components/Receptionniste/RendezVousForm';
import EditRendezVous from './Components/Receptionniste/EditRendezVous';
import BedList from './Components/Receptionniste/BedList';
import FactureList from './Components/Receptionniste/FactureList';
import Facture from './Components/Patient/facture';

import Tech_patient from './Components/Technicien_labo/Patient/tech_patient';
import Tech_resultat from './Components/Technicien_labo/Resultat/tech_resultat';
import ListDoctor from './Components/Doctor/Doctors/doctorList';
import Rapport from './Components/Doctor/Doctors/rapport';
import Directeur from './Components/Directeur/directeru_doc';


import DoctorsProgram from './Components/Receptionniste/DoctorsProgram';
import ChirurgieProgram from './Components/Receptionniste/ChirurgieProgram';
import ChirurgieForm from './Components/Receptionniste/ChirurgieForm';
import FactureForm from './Components/Receptionniste/FactureForm';
import EditFacture from './Components/Receptionniste/EditFacture';
import Profile from './Components/Receptionniste/Profile';
import Profile_D from './Components/Directeur/Profile_D';
import ChirurgieProgram_D from './Components/Directeur/ProgrammeChirurgie';
import PatientList_P from './Components/Directeur/PatientList';
import Profile_M from './Components/Docteur/Profile_M';
import PatientList_M from './Components/Docteur/PatientList';
import ChirurgieProgram_M from './Components/Docteur/ProgrammeChirurgie';
import RendezVousList_M from './Components/Docteur/RendezVous';
import Profile_P from './Components/Patient/Profile';
import Rendez_vous from './Components/Patient/Rendez_vous';
import Historique from './Components/Patient/historique';
import AnalysisResults from './Components/Patient/analyse';
import Doctors from './Components/Patient/medecins';
import ProfileLayout from './Components/Patient/ProfileLayout';
import Compte from './Components/Patient/link-profile/Comptes';
import Documents from './Components/Patient/link-profile/documents';
import Notification from './Components/Patient/link-profile/notification';



const App=()=>{
    return(
        <HashRouter>
           <Routes>
            <Route path="/tech_labo" element={<Tech_profil/>} />
            <Route path="/tech_profil_modification" element={<Tech_profil_modification />} />
                <Route path="/receptionnistes/admission/" element={<CreatePatientForm/>} />
                <Route path="/receptionnistes/admission/nouveau" element={<CreatePatientForm/>} />
                <Route path="/receptionnistes/admission/existant" element={<EditPatientForm/>} />
                <Route path="/receptionnistes/patients/" element={<PatientList/>} />
                <Route path="/" element={<Home/>} />
                <Route path="/tech_programme" element={<Tech_programme/>} />
                <Route path="/tech_patient" element={<Tech_patient/>} />
                <Route path="/tech_resultat" element={<Tech_resultat/>} />
                <Route path="/doctors" element={<ListDoctor/>} />
                <Route path="/rapport" element={<Rapport/>} />
                <Route path="/directeur" element={<Directeur/>} />

                <Route path="/receptionnistes/rendez_vous/" element={<RendezVousList/>} />
                <Route path="/receptionnistes/rendez_vous/list" element={<RendezVousList/>} />
                <Route path="/receptionnistes/rendez_vous/ajouter" element={<RendezVousForm/>} />
                <Route path="/receptionnistes/rendez_vous/modifier" element={<EditRendezVous/>} />
                <Route path="/receptionnistes/lits/" element={<BedList/>} />
                <Route path="/receptionnistes/lits/list" element={<BedList/>} />
                <Route path="/receptionnistes/programme/" element={<DoctorsProgram/>} />
                <Route path="/receptionnistes/chirurgies/" element={<ChirurgieProgram/>} />
                <Route path="/receptionnistes/chirurgies/programme" element={<ChirurgieProgram/>} />
                <Route path="/receptionnistes/chirurgies/ajouter" element={<ChirurgieForm/>} />
                <Route path="/receptionnistes/facture/" element={<FactureList/>} />
                <Route path="/receptionnistes/facture/list" element={<FactureList/>} />
                <Route path="/receptionnistes/facture/ajouter" element={<FactureForm/>} />
                <Route path="/receptionnistes/facture/modifier" element={<EditFacture/>} />
                <Route path="/receptionnistes/profile/" element={<Profile/>} />

                <Route path="/directeurs/profile/" element={<Profile_D/>} />
                <Route path="/directeurs/patients/" element={<PatientList_P/>} />
                <Route path="/directeurs/chirurgies" element={<ChirurgieProgram_D/>} />
                <Route path="/directeurs/doctors" element={<Directeur/>} />

                <Route path="/medecins/profile" element={<Profile_M/>} />
                <Route path="/medecins/patients" element={<PatientList_M/>} />
                <Route path="/medecins/chirurgies" element={<ChirurgieProgram_M/>} />
                <Route path="/medecins/rendez_vous" element={<RendezVousList_M/>} />

                <Route path="/tech_labo" element={<Tech_profil/>} />
                <Route path="/tech_profil_modification" element={<Tech_profil_modification />} />
                <Route path="/tech_programme" element={<Tech_programme/>} />
                {/* <Route path="/tech_patient" element={<Tech_patient/>} />
                <Route path="/tech_resultat" element={<Tech_resultat/>} /> */}

                <Route path="/patients/profile" element={<Profile_P/>} />
                <Route path="/patients/profile/compte" element={<Profile_P/>} />
                <Route path="/patients/profile/documents" element={<Documents/>} />
                <Route path="/patients/profile/notifications" element={<Notification/>} />
                <Route path="/patients/rendez_vous" element={<Rendez_vous/>} />
                <Route path="/patients/historique_rendezVous" element={<Historique/>} />
                {/* <Route path="/patients/ordonnances" element={< />} /> */}
                <Route path="/patients/analyses" element={<AnalysisResults />} />
                <Route path="/patients/medecins" element={<Doctors />} />
                <Route path="/patients/facture" element={<Facture />} />
                

                <Route path="/login" element={<Login/>} />
            </Routes>
        </HashRouter>
    );
}
ReactDOM.createRoot(document.getElementById('app')).render(<App/>);

