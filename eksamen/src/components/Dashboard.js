import { Link } from "react-router-dom";
import GameCard from "./GameCard";
import Nav from "./Nav";

export default function Dashboard({games}){

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
                
                {games?.slice(0, 4).map((game, index) => {
                    return <GameCard key={index} game={game} />
                })}
            </section>

            <section>
                <h2>MY FAVOURITES</h2>
            </section>  
        </main>
    </div>

    )
}
