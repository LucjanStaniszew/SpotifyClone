import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './SearchBar.css';
import { getArtist, getArtistAlbum } from '../../Redux/actions';
import { getTokenFromUrl } from '../LogIn/LogIn';

const SearchBar = () => {
  
  const dispatch = useDispatch();

  const [artist, setArtist] = useState("")
  const [artistId, setArtistId] = useState("")
  //const [artistAlbums, setArtistAlbums] = useState([])
  const logged = getTokenFromUrl();
  const token = logged.access_token;

  const handleSearchBar = (e) => {
    dispatch(getArtist(e.target.value, token))
    //setArtistId(artist)
  }

  const handleSubmit = () => {
    console.log(artistId, token)
    dispatch(getArtistAlbum(artistId, token))
    //dispatch(getArtistAlbum(artistId, token))
  }

  return (
    <div className='SBContainer'>

      <div className="SB">
        <input type="text" placeholder='Buscar Artista...' className="searchInput" onChange={(e) => handleSearchBar(e)}/>
        <button type="submit" className="artistSearch" onClick={(e) => handleSubmit(e)}>Search</button>
      </div>

    </div>
  )
}

export default SearchBar