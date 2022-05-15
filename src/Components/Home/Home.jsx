import React, { useEffect, useState } from 'react';
import './Home.css';
import NavBar from '../NavBar/NavBar.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx';
import { getTokenFromUrl } from '../LogIn/LogIn';
import Arrow2 from '../../Media/Arrow2.png';
import LogIn from '../LogIn/LogIn.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { setToken, setUser } from '../../Redux/actions';
import Paginado from '../Paginado/Paginado';
import Albums from '../Albums/Albums';

const Home = () => {

  const albums = useSelector((state) => state.artistAlbums)
  const band = useSelector((state) => state.artist)

  const [paginaActual, setPaginaActual] = useState(1);
  const [albumsPorPagina, setAlbumsPorPagina] = useState(4);
  const indexUltimoAlbum = paginaActual * albumsPorPagina;
  const indexPrimerAlbum = indexUltimoAlbum - albumsPorPagina;
  const albumes = albums.slice(indexPrimerAlbum, indexUltimoAlbum)

  const Paginacion = (numeroPagina) => {
    setPaginaActual(numeroPagina)
  }

  //const token = getTokenFromUrl()

  //const dispatch = useDispatch();
/*
  useEffect(()=> {
    dispatch(setUser(token))
  })
*/

  //if(token) {
      return (

        <div className='homeContainer'>
        <NavBar />

        <div className="upper">
          <h1 className="busca">Busca tus</h1>
          <h1 className="albumes">albumes</h1>
          <h4 className="p">Encuentra tus artistas favoritos gracias a nuestro buscador y guarda tus álbumes favoritos</h4>
          <SearchBar />
        </div>
        
        <h5 className="save">Guarda tus álbumes favoritos de {band}</h5>
        <div className="down">
          <div className='setAlbums'>
            {
              albumes.map((a) => {
                return (
                  <div key={a.id}>
                    <Albums
                    album = {a}
                    id = {a.id}
                    cover = {a.images[1].url}
                    title = {a.name}
                    date = {a.release_date}
                    />
                  </div>
                )
              })
            }
            </div>
          <div className="bottom">
            <Paginado
            albumsPorPagina = {albumsPorPagina}
            todosAlbumes = {albums.length}
            paginate = {Paginacion}
            paginaActual = {paginaActual}
            />
          </div>
          </div>
      </div>
    )
  /*} else {
    return(
      <div>
        <NavBar/>
        <h3 className='please2'>Error 401, Unauthorized</h3>
        <h1 className='please'>You must Log In to see this page</h1>
        <a className='logIn' href={LogIn}>Log In con Spotify <img src={Arrow2} alt="Arrow" className='Arrow2' /></a>
    </div>
    )
  }*/
}

export default Home