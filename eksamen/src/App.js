import { Link, Route, Routes } from 'react-router-dom';
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
        //Nyeste spill:
          const currentDate = new Date();
          const currentYear = currentDate.getFullYear();
          const lastDateOfYear = new Date(currentYear, 11, 31);
          const firstDateOfYear = new Date(currentYear, 0, 1);

          //Splitter:
          const lastDayString = lastDateOfYear.toISOString().split('T')[0]
          const firstDayString = firstDateOfYear.toISOString().split('T')[0]
          //2011-10-05T14:48:00.000Z split("T") -> [2011-10-05, 14:48:00.000Z][0] = 2011-10-05
          //.toISOString() splitter med ("T") som skaper en array og vi henter ut første(0) som gir dato
          //Kilde: https://stackoverflow.com/questions/23593052/format-javascript-date-as-yyyy-mm-dd

        const response = await fetch(`https://api.rawg.io/api/games?key=94d35c9276c5445c8b0987bb5754074f&ordering=-released&page=1&page_size=100&page=1&dates=${firstDayString},${lastDayString}`)
        //Satte page size til 100 slik at vi får ut flere av den valgte den valgfrie sjangeren på MyGames. 
        const data = await response.json()
        setGames(data.results)
        //console.log(data)

        const adventureGames = data.results.filter((game) => game.genres.some((genre) => genre.slug === 'action'))
        /*Kilde: .filter metoden https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter */
        /*Kilde: .some metoden https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some 
        for å sjekke arrayen om sjangeren inneholder adventure og deretter returnerer vi det i return. */
        setGenredGames(adventureGames)
        //console.log(adventureGames)
      }
      
      useEffect(() => {
          getGame()
      },[]);

  return (
    <>
    <header> 
      <h1><Link to="/">Girly Girls Games</Link></h1>
      <nav>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/gameshop">Shop</Link></li>
            <li><Link to="/myfavourites">My Favourites</Link></li>
            <li><Link to="/mygames">My Games</Link> </li>
        </nav>
        {/* Kilde: https://blog.logrocket.com/creating-navbar-react/ */}
    </header>
    
    <Routes>
      <Route path="/" element={<Dashboard games={games} genredGames={genredGames} MyFavourites={favourites}/>}/>
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
