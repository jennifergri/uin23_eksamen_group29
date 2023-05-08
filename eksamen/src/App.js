import { Route, Routes } from 'react-router-dom';
import './App.css';
import './css/main.css';
import Dashboard from './components/Dashboard';
import GameShop from './components/GameShop';
import MyGames from './components/MyGames';
import MyFavourites from './components/MyFavourites';
import { useEffect, useState } from "react";
import GamePage from './components/GamePage';

function App() {
      //API-nøkkel: 97ef2c2ae8e64769b34f2e83f4c1f037
      const [games, setGames] = useState(null)
      //const [latestReleaseDate, setLatestReleaseDate] = useState()
      const [genredGames, setGenredGames] = useState(null) 
       
      const getGame = async() => {
          const response = await fetch('https://api.rawg.io/api/games?key=97ef2c2ae8e64769b34f2e83f4c1f037&ordering=-released&page=1&page_size=100&page=1&dates=2023-01-01,2023-12-31')
          //Satte page size til 100 slik at vi får ut flere av den valgte den valgfrie sjangeren på MyGames. 
          const data = await response.json()
          setGames(data.results)
          console.log(data)
        
          const actionGames = games?.filter((game) => game.genres.some((genre) => genre.slug === 'action'))
          setGenredGames(actionGames)
          
          /*const latestReleaseDate = new Date(Math.max(...data.results.map(game => new Date(game.released))));
          const today=new Date()
          setLatestReleaseDate(latestReleaseDate);
          console.log(data);*/
      }
      useEffect(() => {
          getGame()
      },[games]);

      /*Kilde: .filter metoden https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter */
      /*Kilde: .some metoden https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some 
        for å sjekke arrayen om sjangeren inneholder adventure og deretter returnerer vi det i return. */

  return (
    <>
    <Routes>
      <Route path="/" element={<Dashboard games={games} genredGames={genredGames}/>}/>
      <Route path="/gameshop" element={<GameShop games={games}/>}/>
      <Route path="/mygames" element={<MyGames games={genredGames} />}/>
      <Route path="/myfavourites" element={<MyFavourites />}/>
      <Route path=":slug" element={<GamePage game={games} />} />
    </Routes>

    <footer>
      <p>API kredit til</p><a href="https://rawg.io">RAWG</a>
    </footer>
    </>
  );
}

export default App;
