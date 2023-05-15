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
      //API-nøkkel: 94d35c9276c5445c8b0987bb5754074f
      const [games, setGames] = useState(null)
      const [genredGames, setGenredGames] = useState(null) 
      const [favourites, setFavourites] = useState([])

      const getGame = async() => {
          const response = await fetch('https://api.rawg.io/api/games?key=94d35c9276c5445c8b0987bb5754074f&ordering=-released&page=1&page_size=100&page=1')
          //Satte page size til 100 slik at vi får ut flere av den valgte den valgfrie sjangeren på MyGames. 
          const data = await response.json()
          setGames(data.results)
          console.log(data)

          const adventureGames = data.results.filter((game) => game.genres.some((genre) => genre.slug === 'action'))
          /*Kilde: .filter metoden https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter */
          /*Kilde: .some metoden https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some 
          for å sjekke arrayen om sjangeren inneholder adventure og deretter returnerer vi det i return. */
          setGenredGames(adventureGames)
          console.log(adventureGames)
      }
      
      useEffect(() => {
          getGame()
      },[]);

  return (
    <>
    <Routes>
      <Route path="/" element={<Dashboard games={games} genredGames={genredGames}/>}/>
      <Route path="/gameshop" element={<GameShop games={games}/>}/>
      <Route path="/mygames" element={<MyGames games={genredGames}/>}/>
      <Route path="/myfavourites" element={<MyFavourites games={favourites} />}/>
      <Route path="/:slug" element={<GamePage game={games} favourites={favourites} setFavourites={setFavourites} />}/>
    </Routes>

    <footer>
      <p>API kredit til</p><a href="https://rawg.io">RAWG</a>
    </footer>
    </>
  );
}

export default App;
