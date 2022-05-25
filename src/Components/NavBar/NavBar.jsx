import React, { useState } from 'react';
import './NavBar.css';
import Aluxion from '../../Media/Aluxion.png';
import Aluxion2 from '../../Media/Aluxion2.png';
import Sun from '../../Media/Sun.png';
import { getTokenFromUrl } from '../LogIn/LogIn';
import { useNavigate } from 'react-router';
import Close from '../../Media/close.png'


const NavBar = () => {

  const token = sessionStorage.getItem("token")

  const navigate = useNavigate()

  const [homeActive, setHomeActive] = useState(false)
  const [albumsActive, setAlbumsActive] = useState(false)
  
  const handleCloseSession = () => {
    sessionStorage.removeItem("token")
    navigate("/")
  }

  if(token) {

    return (
      <div className='container'>
        
      <div className="left">
        <a href="https://github.com/LucjanStaniszew" target="_blank">
        <button className="Git" />
        </a>

        <a href="https://www.linkedin.com/in/luciano-staniszewski-784264222/" target="_blank">
        <button className="LinkedIn" />
        </a>

        <a href="https://wa.me/5491133518159" target="_blank">
        <button className="WhatsApp" />
        </a>
      </div>

      <div className="right">
        <a href="/home" className={`button-${homeActive ? "active" : "inactive"}`}>Buscar</a>
        <a href="/myalbums" className={`button-${albumsActive ? "active" : "inactive"}`}>My Albums</a>
        <h5 className="disable">|</h5>
        <button className="sesion" onClick={handleCloseSession}>Cerrar Sesion</button>
        <img src={Close} alt="close" className='close' />
        <h5 className="disable">|</h5>
        <button className="sun-moon"><img src={Sun} alt="Sun/Moon" /></button>
      </div>

    </div>
    )
  } else {
    return (

      <div className='container'>
      <div className='left'>
        <a href="https://github.com/LucjanStaniszew" target="_blank">
        <button className="Git" />
        </a>
        
        <a href="https://www.linkedin.com/in/luciano-staniszewski-784264222/" target="_blank">
        <button className="LinkedIn" />
        </a>

        <a href="https://wa.me/5491133518159" target="_blank">
        <button className="WhatsApp" />
        </a>
    </div>
    <div className='right2'>
    <button className='sun-moon'><img src={Sun} alt="Sun/Moon" /></button>
    </div>
    </div>
    
   
   )
  }
}


export default NavBar