import { Link } from "react-router-dom";
import GameCard from "./GameCard";
import Nav from "./Nav";

export default function Dashboard(){

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
                <GameCard/>
            </section>

            <section>
                <h2>MY GAMES-LIBRARY</h2>
            </section>

            <section>
                <h2>MY FAVOURITES</h2>
            </section>  
        </main>
    </div>

    )
}
