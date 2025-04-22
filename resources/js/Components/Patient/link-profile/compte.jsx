import React from "react";
import { useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";
const Compte = () => {
  const [patient, setPatient, photo] = useOutletContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatient(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    if (photo) formData.append('photo', photo);
    formData.append('nom', patient.nom);
    formData.append('prenom', patient.prenom);
    formData.append('genre', patient.genre);
    formData.append('date_Naissance', patient.date_Naissance);
    formData.append('tel', patient.tel);
    formData.append('email', patient.email);
    formData.append('adresse', patient.adresse);
    formData.append('groupeSanguin', patient.groupeSanguin);
    formData.append('allergie', patient.allergie);
    formData.append('conditions_Medicaux', patient.conditions_Medicaux);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/patients/update-profile', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Upload failed');

      toast.success('✅ Profil mis à jour avec succès');
    } catch (err) {
      toast.error('❌ Erreur lors de la mise à jour');
      console.error(err);
    }
  };
  return (
    <form className="profile-form" onSubmit={handleSubmit}>
      
      <div className="form-group">
        <label>Nom:</label>
        <input type="text" name="nom" value={patient.nom} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Prénom:</label>
        <input type="text" name="prenom" value={patient.prenom} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Genre:</label>
        <input type="text" name="genre" value={patient.genre} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Date de naissance:</label>
        <input type="text" name="date_Naissance" value={patient.date_Naissance} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Numéro de téléphone:</label>
        <input type="text" name="tel" value={patient.tel} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Adresse email:</label>
        <input type="email" name="email" value={patient.email} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Adresse:</label>
        <input type="text" name="adresse" value={patient.adresse} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Groupe Sanguin:</label>
        <input type="text" name="groupeSanguin" value={patient.groupeSanguin} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Allergies:</label>
        <input type="text" name="allergie" value={patient.allergie} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Conditions Médicales:</label>
        <input type="text" name="conditions_Medicaux" value={patient.conditions_Medicaux} onChange={handleChange} />
      </div>
      <button type="submit" className="validation-button">Validation</button>
    </form>
  );
};

export default Compte;