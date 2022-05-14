import { useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage.jsx';
import LogIn from './Components/LogIn/LogIn.jsx'
import Home from './Components/Home/Home.jsx';
import MyAlbums from './Components/MyAlbums/MyAlbums.jsx';
import { getTokenFromUrl } from './Components/LogIn/LogIn.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { SET_USER } from './Redux/userSlice.js';
import { selectToken, SET_TOKEN } from './Redux/tokenSlice.js';
import SpotifyWebApi from 'spotify-web-api-js';
import './App.css';

function App() {
  
  const dispatch = useDispatch();
  const token = useSelector(selectToken)

  const spotify = new SpotifyWebApi();

  useEffect(()=> {
    const logged = getTokenFromUrl();
    window.location.hash = "";
    const token = logged.access_token;

    if (token) {
      dispatch(SET_TOKEN(token))
      spotify.setAccessToken(token);
      spotify.getMe().then( user => dispatch(SET_USER(user)) )
      console.log(token)
    }
  }, [dispatch])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/login' element={<LogIn/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/myalbums' element={<MyAlbums/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
