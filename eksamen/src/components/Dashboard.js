import { Link } from "react-router-dom";
import GameCard from "./GameCard";
import Nav from "./Nav";
import { useEffect, useState } from "react";

export default function Dashboard({games}){

    //API-nøkkel: 97ef2c2ae8e64769b34f2e83f4c1f037
    const [mygames, setMyGames] = useState(null)
        
    const getMyGames = async() => {
        const response = await fetch('https://api.rawg.io/api/games?key=97ef2c2ae8e64769b34f2e83f4c1f037&ordering=-released&page=1&page_size=10&page=1&dates=2023-01-01,2023-12-31&genres=adventure')
        const data = await response.json()
        setMyGames(data.results)
        //setGenredGames(data.results)
        console.log(data)
    }

    useEffect(() => {
        getMyGames()
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
                    <Link to="/mygames" >Go to library</Link>
                </button>
                
                {mygames?.slice(0, 4).map((game, index) => {
                    return <GameCard key={index} game={game} />
                })}
                {/* Brukt slice metoden for å dele opp objektene i arrayen til APIet basert på index:
                https://lms.webtricks.blog/kurs/innforing-i-programmering/arrayer-og-objekter/arrayer#h919312c0e8c5*/}
            </section>

            <section>
                <h2>MY FAVOURITES</h2>
            </section>  
        </main>
    </div>

    )
}
