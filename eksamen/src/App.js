import { Route, Routes } from 'react-router-dom';
import './App.css';
import './css/main.css';
import Dashboard from './components/Dashboard';
import GameShop from './components/GameShop';
import MyGames from './components/MyGames';
import MyFavourites from './components/MyFavourites';
import { useEffect, useState } from "react";

function App() {
      //API-nøkkel: 97ef2c2ae8e64769b34f2e83f4c1f037
      const [games, setGames] = useState(null)
      //const [latestReleaseDate, setLatestReleaseDate] = useState()
       
      const getGame = async() => {
          const response = await fetch('https://api.rawg.io/api/games?key=97ef2c2ae8e64769b34f2e83f4c1f037&ordering=-released&page=1&page_size=20&page=1&dates=2023-01-01,2023-12-31')
          const data = await response.json()
          setGames(data.results)
          console.log(data)
          
          /*const latestReleaseDate = new Date(Math.max(...data.results.map(game => new Date(game.released))));
          const today=new Date()
          setLatestReleaseDate(latestReleaseDate);
          console.log(data);*/
      }
      useEffect(() => {
          getGame()
      },[]);

  return (
    <>
    <Routes>
      <Route path="/" element={<Dashboard games={games}/>}/>
      <Route path="/gameshop" element={<GameShop games={games}/>}/>
      <Route path="/mygames" element={<MyGames games={games}/>}/>
      <Route path="/myfavourites" element={<MyFavourites />}/>
    </Routes>

    <footer>
      <p>API kredit til</p><a href="https://rawg.io">RAWG</a>
    </footer>
    </>
  );
}

export default App;
