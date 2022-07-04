import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './SearchBar.css';
import { getArtist } from '../../Redux/actions';
import { getTokenFromUrl } from '../LogIn/LogIn';

const SearchBar = () => {
  
  const dispatch = useDispatch();

  const [artist, setArtist] = useState("")
  const logged = getTokenFromUrl();
  const token = logged.access_token;

  const handleSearchBar = (e) => {
    setArtist(e.target.value)
  }

  const handleSubmit = () => {
    dispatch(getArtist(artist, token))
  }

  return (
    <div className='SBContainer'>

      <form className="SB" onSubmit={(e) => {
         e.preventDefault()
         handleSubmit(e)
        }}>
        <input type="text" placeholder='Buscar Artista...' className="searchInput" onChange={(e) => handleSearchBar(e)}/>
        <input type="submit" className="artistSearch" value="Search" />
      </form>

    </div>
  )
}

export default SearchBar