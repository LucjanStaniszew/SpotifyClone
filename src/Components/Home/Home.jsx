import React from 'react';
import './Home.css';
import NavBar from '../NavBar/NavBar.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx';
import { getTokenFromUrl } from '../LogIn/LogIn';
import Arrow2 from '../../Media/Arrow2.png';
import LogIn from '../LogIn/LogIn.jsx';

const Home = () => {

  const token = getTokenFromUrl()

  if(token) {
      return (
        <div className='homeContainer'>
        <NavBar />

        <div className="upper">
          <h1 className="busca">Busca tus</h1>
          <h1 className="albumes">albumes</h1>
          <h4 className="p">Encuentra tus artistas favoritos gracias a nuestro buscador y guarda tus álbumes favoritos</h4>
          <SearchBar />
        </div>
        
        <div className="down">
          <h5 className="save">Guarda tus álbumes favoritos de {/* ArtistName */}</h5>
          {/*
          <img src="" alt="" className="albumCover" />
          <h2 className="albumTitle"></h2>
          <h5 className="published">Publicado:</h5>
          */}
          <button className="add">+ Add album</button>
        </div>
      </div>
    )
  } else {
    return(
      <div>
        <NavBar/>
        <h3 className='please2'>Error 401, Unauthorized</h3>
        <h1 className='please'>You must Log In to see this page</h1>
        <a className='logIn' href={LogIn}>Log In con Spotify <img src={Arrow2} alt="Arrow" className='Arrow2' /></a>
    </div>
    )
  }
}

export default Home