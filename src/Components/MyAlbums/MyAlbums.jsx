import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { accesToken, getMyAlbums, setUser } from '../../Redux/actions';
import FavAlbums from '../Albums/FavAlbums';
import NavBar from '../NavBar/NavBar';
import Paginado from '../Paginado/Paginado';
import './MyAlbums.css';

const MyAlbums = () => {

  const dispatch = useDispatch();
  const access = sessionStorage.getItem("token");
  const myAlbums = useSelector((state) => state.userAlbums)

  useEffect( ()=>{
    dispatch(accesToken(access))
    dispatch(setUser());
    dispatch(getMyAlbums(access));
  }, [dispatch])


  const [paginaActual, setPaginaActual] = useState(1);
  const [albumsPorPagina, setAlbumsPorPagina] = useState(4);
  const indexUltimoAlbum = paginaActual * albumsPorPagina;
  const indexPrimerAlbum = indexUltimoAlbum - albumsPorPagina;
  const albums = myAlbums.slice(indexPrimerAlbum, indexUltimoAlbum);

  const Paginacion = (numeroPagina) => {
    setPaginaActual(numeroPagina)
  }

  return (
    <div className='albumsContainer'>
      <NavBar/>
      <div className="albumsUpper">
      <h1 className="albumes">Mis albumes</h1>
          <h1 className="guardados">guardados</h1>
          <h4 className="p">Disfruta de la música a un solo click y descubre que discos has guardado dentro de "mis albumes"</h4>
      </div>
      <div className="down">
        <div className="myAlbums">
          {
            albums.map((a) => {
              return (
                <div key={a.album.id}>
                  <FavAlbums
                  album = {a}
                  id = {a.album.id}
                  cover = {a.album.images[1].url}
                  title = {a.album.name}
                  date = {a.album.release_date}
                  />
                </div>
              )
            })
          }
        </div>
        <div className="bottom">
          <Paginado
          albumsPorPagina = {albumsPorPagina}
          todosAlbumes = {myAlbums.length}
          paginate = {Paginacion}
          paginaActual = {paginaActual}
          />
        </div>
      </div>
    </div>
  )
}

export default MyAlbums