import { useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage.jsx';
import LogIn from './Components/LogIn/LogIn.jsx'
import Home from './Components/Home/Home.jsx';
import MyAlbums from './Components/MyAlbums/MyAlbums.jsx';
import './App.css';

function App() {

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
