import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import './SearchBar.css';

const SearchBar = () => {


  return (
    <div className='SBContainer'>

      <div className="SB">
        <input type="text" placeholder='Buscar Artista...' className="searchInput" />
        <button type="submit" className="artistSearch">Search</button>
      </div>

    </div>
  )
}

export default SearchBar