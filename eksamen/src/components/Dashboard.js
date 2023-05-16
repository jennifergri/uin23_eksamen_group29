import { Link } from "react-router-dom";
import GameCard from "./GameCard";

export default function Dashboard({games, genredGames, MyFavourites}){
    
    return(
        <>
        <main>
            <section className="visitshop">
                <h2>GAMESHOP</h2>
                <button>
                    <Link to="/gameshop">Visit shop</Link>
                </button>
            </section>
            
            <section className="gameshop">
                {games?.sort((a, b) => { return new Date(a.released) - new Date(b.released)}).slice(0, 3).map((game, index) => {
                    return <GameCard key={index} game={game} />
                })}
                {/* Kilde: https://stackoverflow.com/questions/10123953/how-to-sort-an-object-array-by-date-property, samt hjelp fra Ann-Charlott */}
            </section>
            
            <h2>MY GAMES-LIBRARY</h2>
            <section className="mygames"> 
                {genredGames?.slice(0, 4).map((game, index) => {
                    return <GameCard key={index} game={game} />
                })}
                {/*Kilde: Brukt slice metoden for å dele opp objektene i arrayen til APIet basert på index:
                https://lms.webtricks.blog/kurs/innforing-i-programmering/arrayer-og-objekter/arrayer#h919312c0e8c5*/}
            </section>
            <button className="button">
                <Link to="/mygames">Go to library</Link>
            </button>
        </main>

        <aside>
            <h2>MY FAVOURITES</h2>
            {MyFavourites?.slice(0, 2).map((game, index) => {
                return <GameCard key={index} game={game} />
            })}
            <button className="button">
                <Link to="/myfavourites">Go to favourites</Link>
            </button>
        </aside>
        </>
    )
}
