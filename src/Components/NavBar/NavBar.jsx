import React, { useState } from 'react';
import './NavBar.css';
import Aluxion from '../../Media/Aluxion.png';
import Sun from '../../Media/Sun.png';
import { getTokenFromUrl } from '../LogIn/LogIn';

const NavBar = () => {

  const token = getTokenFromUrl()

  const [homeActive, setHomeActive] = useState(false)
  const [albumsActive, setAlbumsActive] = useState(false)
  /*if(window.location.href === "http://localhost:3000/home") setHomeActive(true)
  if(window.location.href === "http://localhost:3000/myalbums") setAlbumsActive(true)*/

  if(token) {

    return (
      <div className='container'>
        
      <div className="left">
        <img src={Aluxion} alt="Aluxion" className="Aluxion-image" />
      </div>

      <div className="right">
        <a href="/home" className={`button-${homeActive ? "active" : "inactive"}`}>Buscar</a>
        <a href="/myalbums" className={`button-${albumsActive ? "active" : "inactive"}`}>My Albums</a>
        <h5 className="disable">|</h5>
        <button className="sesion">Cerrar Sesion</button>
        <h5 className="disable">|</h5>
        <button className="sun-moon"><img src={Sun} alt="Sun/Moon" /></button>
      </div>

    </div>
    )
  } else {
    return (

      <div className='container'>
      <div className='left-nb'>
      <img src={Aluxion} alt="Aluxion" className='Aluxion-image' />
    </div>
    <div className='right2'>
    <button className='sun-moon'><img src={Sun} alt="Sun/Moon" /></button>
    </div>
    </div>
    
   
   )
  }
}


export default NavBar