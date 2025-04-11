import React from "react";

const Login =()=>{
    return(
        <div className="login-container">
        <div className='login-form'>
        <img src="./Images/Home/Logo.png" className="LOGO"/>
        <h1>VITAL HOPE</h1>
        <h3>UN AVENIR VITAL</h3>
            <form>
                <div className='input-group'>
                  <label>Email :</label>
                  <input type="text" placeholder="exemple@vital.com" name='email' />
                </div>
                <div className='input-group'>
                  <label htmlFor="">Mot de Passe:</label>
                  <input type="text" name='mdp' /><br />
                 <button type="submit" className="login-btn">Se connecter</button>
                </div>
            </form>
        </div>
      </div>
    )
}
export default Login;