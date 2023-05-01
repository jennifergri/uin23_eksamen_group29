import { Link } from "react-router-dom";
import GameCard from "./GameCard";
import Nav from "./Nav";
import MyGames from "./MyGames";

export default function Dashboard({getShop}){

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
                <GameCard getShop={getShop} />
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
