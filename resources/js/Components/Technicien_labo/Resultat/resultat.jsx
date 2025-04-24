import React, { useEffect, useState, useRef } from "react";
import { jsPDF } from "jspdf";
import Header from "./Header";
import SideMenu from "./SideMenu";
import { CiSquarePlus } from "react-icons/ci";

const Resultat = ({ location }) => {
  const [nomTechnicien, setNomTechnicien] = useState("");
  const [dateAujourdHui, setDateAujourdHui] = useState("");
  const [inputs, setInputs] = useState([
    { prelevement: "", parametre: "", valTrouve: "", valReference: "", unite: "", observation: "" },
    { prelevement: "", parametre: "", valTrouve: "", valReference: "", unite: "", observation: "" },
    { prelevement: "", parametre: "", valTrouve: "", valReference: "", unite: "", observation: "" },
  ]);
  const patientIDRef = useRef();
  const testIDRef = useRef();
  const serviceRef = useRef();
  const typePrelevementRef = useRef();
  const interpretationRef = useRef();

  useEffect(() => {
    if (location?.state?.user) setNomTechnicien(location.state.user.nom);
    const date = new Date().toLocaleDateString();
    setDateAujourdHui(date);
  }, [location]);

  const handleInputChange = (e, index, field) => {
    const newInputs = [...inputs];
    newInputs[index][field] = e.target.value;
    setInputs(newInputs);
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    const margin = 20;
    let y = margin;

    
    doc.setFontSize(24);
    doc.setTextColor(28, 73, 102); // #1C4966
    doc.setFont("helvetica", "bold");
    doc.text("Résultat d'Analyse", margin, y);
    y += 20;

   
    doc.setDrawColor(28, 73, 102); // #1C4966
    doc.line(margin, y, 195, y);
    y += 10;
    doc.setFontSize(16);
    doc.setTextColor(28, 73, 102); // #1C4966
    doc.setFont("helvetica", "bold");
    doc.text("Technicien", margin, y);
    y += 12;
    doc.setFont("helvetica", "normal");
    doc.setTextColor(0, 0, 0);
    doc.text(`Nom : ${nomTechnicien}`, margin, y);
    y += 8;
    doc.text(`Patient ID : ${patientIDRef.current.value }`, margin, y);
    y += 8;
    doc.text(`Test ID : ${testIDRef.current.value }`, margin, y);
    y += 20;
    doc.setFont("helvetica", "bold");
    doc.setTextColor(28, 73, 102); // #1C4966
    doc.text("Informations Complémentaires", margin, y);
    y += 12;
    doc.setFont("helvetica", "normal");
    doc.setTextColor(0, 0, 0);
    doc.text(`Date : ${dateAujourdHui}`, margin, y);
    y += 8;
    doc.text(`Service : ${serviceRef.current.value }`, margin, y);
    y += 8;
    doc.text(`Type de prélèvement : ${typePrelevementRef.current.value }`, margin, y);
    y += 20;

   
    doc.setFont("helvetica", "bold");
    doc.setTextColor(28, 73, 102); // #1C4966
    doc.text("Paramètres d'Analyse", margin, y);
    y += 12;

    const headers = ["Prélèvement", "Paramètre", "Val. trouvée", "Val. référence", "Unité", "Observation"];
    const colWidth = 28;
    const rowHeight = 8;

    doc.setFillColor(37, 198, 192); // #25C6C0
    headers.forEach((header, i) => {
        doc.rect(margin + i * colWidth, y, colWidth, rowHeight, "F");
        doc.setTextColor(255, 255, 255);
        doc.text(header, margin + i * colWidth + 2, y + 5);
    });
    y += rowHeight;

   
    doc.setTextColor(0, 0, 0);
    doc.setFont("helvetica", "normal");
    inputs.forEach((input) => {
        const fields = [
            input.prelevement || "-",
            input.parametre || "-",
            input.valTrouve || "-",
            input.valReference || "-",
            input.unite || "-",
            input.observation || "-",
        ];
        fields.forEach((text, i) => {
            doc.rect(margin + i * colWidth, y, colWidth, rowHeight);
            doc.text(text, margin + i * colWidth + 2, y + 5);
        });
        y += rowHeight;
        if (y > 270) {
            doc.addPage();
            y = margin;
        }
    });

    y += 20;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.setTextColor(28, 73, 102); // #1C4966
    doc.text("Interprétation", margin, y);
    y += 12;
    doc.setFont("helvetica", "normal");
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(12);
    const interpretation = interpretationRef.current.value || "";
    const lines = doc.splitTextToSize(interpretation, 180);
    doc.text(lines, margin, y);

    
    doc.save("resultat.pdf");
};



  return (
    <>
      <Header />
      <SideMenu />
      <div id="list-patient-container">
        <nav id="SideBar">
          <div style={{ display: "flex", flexDirection: "column", gap: "15px", margin: "20px 0" }}>
            <button className="add-btn">Ajouter <CiSquarePlus /></button>
          </div>
        </nav>

        <div className="all">
          <div className="all-p">
            <p>Nom du Technicien: {nomTechnicien}</p>
            <p>PatientID: <input type="text" ref={patientIDRef} /></p>
            <p>Test ID: <input type="text" ref={testIDRef} /></p>
          </div>
          <div className="all-p">
            <p>Date: {dateAujourdHui}</p>
            <p>Service: <input type="text" ref={serviceRef} /></p>
            <p>Type de prélèvement: <input type="text" ref={typePrelevementRef} /></p>
          </div>
        </div>

        <section id="patient-list">
          <table id="patient-table" rules="all" width="100%">
            <thead>
              <tr className="header-table">
                {["Prélèvement", "Paramètre", "Val.trouvé", "Val.reference", "Unité", "Observation"].map((col, i) => (
                  <th key={i}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {inputs.map((input, index) => (
                <tr key={index}>
                  {["prelevement", "parametre", "valTrouve", "valReference", "unite", "observation"].map((field, i) => (
                    <td key={i}>
                      <input
                        type="text"
                        value={input[field]}
                        onChange={(e) => handleInputChange(e, index, field)}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>

      <div className="inter">
        <h3 className="inter-h">Interprétation</h3>
        <textarea ref={interpretationRef}></textarea>
        <div className="button-c">
          <button className="modifier-btn" onClick={downloadPDF}>Télécharger</button>
          <button className="logout-btn">Valider</button>
        </div>
      </div>
    </>
  );
};

export default Resultat;
