import { Route, Routes } from 'react-router-dom';
import './App.css';
import './css/main.css';
import Dashboard from './components/Dashboard';
import GameShop from './components/GameShop';
import MyGames from './components/MyGames';
import MyFavourites from './components/MyFavourites';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Dashboard />}/>
      <Route path="/gameshop" element={<GameShop />}/>
      <Route path="/mygames" element={<MyGames />}/>
      <Route path="/myfavourites" element={<MyFavourites />}/>
    </Routes>

      <footer>
      <p>API kredit til</p><a href="https://rawg.io">RAWG</a>
      </footer>

    </>
    
  );
}

export default App;
