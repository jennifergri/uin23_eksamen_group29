import { Link } from "react-router-dom";
import GameCard from "./GameCard";
import Nav from "./Nav";
import MyGames from "./MyGames";
import { useEffect, useState } from "react";

export default function Dashboard(){

    //API-nøkkel: 97ef2c2ae8e64769b34f2e83f4c1f037
    const [games, setGames] = useState(null)

    const getGame = async() => {
        const response = await fetch('https://api.rawg.io/api/games?key=97ef2c2ae8e64769b34f2e83f4c1f037&ordering=-released&page=1&page_size=20&page=1&dates=2023-01-01,2023-12-31')
        const data = await response.json()
        setGames(data.results)
        console.log(data)
    }

    useEffect(() => {
        getGame()
    },[]);

    return(
    <div>
        <header> 
            <h1>Girly Girls Games</h1>
            <Nav />
        </header>

        <main>
            <h2>GAMESHOP</h2>
            <button>
                <Link to="/gameshop">Visit shop</Link>
            </button>
            <section>
                {games?.slice(0, 3).map((game, index) => {
                    return <GameCard key={index} game={game} />
                })}
            </section>

            <section>
                <h2>MY GAMES-LIBRARY</h2>
                <button>
                    <Link to="/mygames">Go to library</Link>
                </button>
            </section>

            <section>
                <h2>MY FAVOURITES</h2>
            </section>  
        </main>
    </div>

    )
}
