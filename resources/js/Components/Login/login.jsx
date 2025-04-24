import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [mot_de_passe, setMot_de_passe] = useState('');
  const [role, setRole] = useState('patient');
  const [message, setMessage] = useState('');
  const [user,setUser]=useState({});
  const [userInfo,setUserInfo]=useState({});

  useEffect(() => {
    console.log(userInfo);
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    if (!user.id) return;     
    switch (user.role) {
      case 'docteur':
        navigate('/medecins/profile', { state: { user } });
        break;
      case 'patient':
        navigate('/patients/profile', { state: { user } });
        break;
      // …
      case 'technicien_labo':
        navigate('/tech_labo', { state: { user } });
        break;
      case 'receptionniste':
        navigate('/receptionnistes/profile', { state: { user } });
        break;
      case 'directeur':
        navigate('/directeurs/profile', { state: { user } });
        break;
      // …
      default:
        console.log("Rôle non reconnu");
    }
  }, [user,userInfo, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/login', {
        email:email,
        password:mot_de_passe
      }, { withCredentials: true });
      
      console.log(response.data.role);  
      console.log(response);
      const userRole = response.data.role;
      const userInfo=response.data.userinfo;
      console.log(userInfo);
      setUser(response.data.user);
      setUserInfo(response.data.userinfo);
      if (userRole === 'docteur') {
        navigate('/docteur');
      } else if (userRole === 'patient') {
        navigate('/patients/profile');
      } else if (userRole === 'directeur') {
        navigate('/directeur');
      } else if (userRole === 'infirmier') {
        navigate('/infirmier');
      } else if (userRole === 'technicien_labo') {
        navigate('/tech_labo', { state: { user: user } });
      } else if (userRole === 'receptionniste') {
        navigate('/receptionnistes/profile/', { state: { user: user } });
      } else {
        console.log("Rôle non reconnu");
      }
    } catch (error) {
      console.error(error);
      setMessage("Erreur de connexion");
    }
  };

  return (
    <div className="login-container">
      <div className='login-form'>
        <img src="./Images/Home/Logo.png" className="LOGO" alt="logo" />
        <h1>VITAL HOPE</h1>
        <h3>UN AVENIR VITAL</h3>

        <form onSubmit={handleLogin}>
          <div className='input-group'>
            <label>Email :</label>
            <input type="text"placeholder="exemple@vital.com" value={email} onChange={(e) => setEmail(e.target.value)}required/>
          </div>

          <div className='input-group'>
            <label>Mot de Passe:</label>
            <input type="password" value={mot_de_passe} onChange={(e) => setMot_de_passe(e.target.value)} required/>
          </div>


          <div className='input-group'>
            <button type="submit" className="login-btn">Se connecter</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;