import { useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage.jsx';
import LogIn from './Components/LogIn/LogIn.jsx'
import Home from './Components/Home/Home.jsx';
import MyAlbums from './Components/MyAlbums/MyAlbums.jsx';
import { getTokenFromUrl } from './Components/LogIn/LogIn.jsx';
import { useDispatch } from 'react-redux';
import SpotifyWebApi from 'spotify-web-api-js';
import './App.css';
import { getMyAlbums, setToken, setUser } from './Redux/actions.js';

function App() {
  /*
  const dispatch = useDispatch();

  const spotify = new SpotifyWebApi();

  useEffect(()=> {
    const logged = getTokenFromUrl();
    const token = logged.access_token;

      dispatch(setToken(token))
      spotify.setAccessToken(token);
      dispatch(setUser());
      dispatch(getMyAlbums(token));
  }, [])*/

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
