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
      <Route path="/favourites" element={<MyFavourites />}/>
    </Routes>
    </>
  );
}

export default App;
