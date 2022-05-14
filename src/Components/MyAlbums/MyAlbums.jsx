import React from 'react';
import NavBar from '../NavBar/NavBar';
import './MyAlbums.css';
import { getTokenFromUrl } from '../LogIn/LogIn';

const MyAlbums = () => {

  const token = getTokenFromUrl()

  return (
    <div>
      <NavBar/>
    </div>
  )
}

export default MyAlbums