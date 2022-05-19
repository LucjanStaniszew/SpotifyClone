import React, { useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import Arrow from '../../Media/Arrow.png';
import Arrow2 from '../../Media/Arrow2.png';
import LogIn, { getTokenFromUrl } from '../LogIn/LogIn.jsx';
import './LandingPage.css';
import { useNavigate } from 'react-router';

const LandingPage = () => {

  const [token, setToken] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    const logged = getTokenFromUrl();
    const sesion = logged.access_token;
    setToken(sesion)
    const token = localStorage.setItem("token", sesion)
  })

  if(token) {
   const acceso = sessionStorage.setItem("token", token)
  navigate("/home")
  }
  
/*
  const autorizacion = "https://accounts.spotify.com/authorize";
  const clientId = "39b4aa1ee9534413a40b7fefe4dca807";
  const redirectURI = "http://localhost:3000/home";

  const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state"
  ];

  const LogIn = `${autorizacion}?client_id=${clientId}&response_type=token&redirect_uri=${redirectURI}&scope=${scopes.join("%20")}&show_dialog=true`
*/
  return (
    <div>
      <NavBar />
      <div className="login-container">
        
        <div className="left-login">
          <img src={Arrow} alt="Arrow" className='Arrow' />
        </div>

        <div className="right-login">
          
          <div className="dismus">
            <h1 className="disfruta">Disfruta de la</h1>
            <h1 className="musica">mejor música</h1>
          </div>

          <div className="r-cuenta">
            <h5 className="cuenta">Accede a tu cuenta para guardar tus albumes favoritos</h5>
          </div>

          <div className="spoti">
            <a className='logIn' href={LogIn}>Log In con Spotify <img src={Arrow2} alt="Arrow" className='Arrow2' /></a>
          </div>

        </div>

      </div>
    </div>
  )
}

export default LandingPage