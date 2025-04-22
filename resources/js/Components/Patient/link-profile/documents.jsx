import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";

const Documents = () => {
  const [, , , setPhoto] = useOutletContext();
  const [documents, setDocuments] = useState([]);
  const [uploading, setUploading] = useState(false);

  const handleDocumentUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append('document', file);

    try {
      
      setTimeout(() => {
        setDocuments(prev => [
          ...prev,
          {
            id: Date.now(),
            name: file.name,
            size: file.size,
            date: new Date().toLocaleDateString()
          }
        ]);
        setUploading(false);
        toast.success('✅ Document téléchargé avec succès');
      }, 1000);
      
    } catch (err) {
      toast.error('❌ Erreur lors du téléchargement');
      console.error(err);
      setUploading(false);
    }
  };

  return (
    <div className="documents-section">
      <h3>Mes Documents</h3>
      
      {documents.length === 0 ? (
        <p>Aucun document disponible pour le moment.</p>
      ) : (
        <div className="documents-list">
          {documents.map(doc => (
            <div key={doc.id} className="document-item">
              <span className="document-name">{doc.name}</span>
              <span className="document-date">{doc.date}</span>
              <button className="document-download">Télécharger</button>
            </div>
          ))}
        </div>
      )}
      
      <div className="upload-document">
        <input
          type="file"
          onChange={handleDocumentUpload}
          id="document-upload"
          style={{ display: "none" }}
        />
        <label htmlFor="document-upload" className="upload-button">
          {uploading ? "Téléchargement..." : "Ajouter un document"}
        </label>
      </div>
    </div>
  );
};

export default Documents;