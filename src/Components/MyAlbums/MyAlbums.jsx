import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { accesToken, getMyAlbums, setUser } from '../../Redux/actions';
import Albums from '../Albums/Albums';
import NavBar from '../NavBar/NavBar';
import Paginado from '../Paginado/Paginado';
import './MyAlbums.css';

const MyAlbums = () => {

  const dispatch = useDispatch();
  const access = sessionStorage.getItem("token");
  const myAlbums = useSelector((state) => state.userAlbums)
  console.log(myAlbums)

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
    <div>
      <NavBar/>
      <div className="myAlbums">
        {
          albums.map((a) => {
            return (
              <div key={a[0].album.id}>
                <Albums
                album = {a}
                id = {a[0].album.id}
                cover = {a[0].album.images[1].url}
                title = {a[0].album.name}
                date = {a[0].album.release_date}
                />
              </div>
            )
          })
        }
      </div>
      <div className="pages">
        <Paginado
        albumsPorPagina = {albumsPorPagina}
        todosAlbumes = {albums.length}
        paginate = {Paginacion}
        paginaActual = {paginaActual}
        />
      </div>
    </div>
  )
}

export default MyAlbums