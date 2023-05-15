import { Link } from "react-router-dom";
import GameCard from "./GameCard";
import Nav from "./Nav";

export default function Dashboard({games, genredGames, handleFavourite}){
    
    
    return(
    <div className="container">
        <header> 
            <h1>Girly Girls Games</h1>
            <Nav/>
        </header>

        <main>
            <section className="visitshop">
                <h2>GAMESHOP</h2>
                <button>
                    <Link to="/gameshop">Visit shop</Link>
                </button>
            </section>

            <section className="gameshop">
                {games?.slice(0, 3).map((game, index) => {
                    return <GameCard key={index} game={game} />
                })}
            </section>

            <section className="mygames"> 
                <h2>MY GAMES-LIBRARY</h2>
                <button>
                    <Link to="/mygames">Go to library</Link>
                </button>
                
                {genredGames?.slice(0, 4).map((game, index) => {
                    return <GameCard key={index} game={game} />
                })}
                {/*Kilde: Brukt slice metoden for å dele opp objektene i arrayen til APIet basert på index:
                https://lms.webtricks.blog/kurs/innforing-i-programmering/arrayer-og-objekter/arrayer#h919312c0e8c5*/}
            </section>

            <section className="favourites">
                <h2>MY FAVOURITES</h2>
                <button>
                    <Link to="/myfavourites">Go to favourites</Link>
                </button>
                {handleFavourite?.slice(0, 2).map((game, index) => {
                    return <GameCard key={index} game={game} />
                })}
            </section>  
        </main>
    </div>

    )
}

//Filtrere ut de 3 nyeste her. Ikke i API-kallet. Filtrere på rating. Fjernet mange av dem som ikke har kommet ut enda. Filtrere videre datoen. 
//Sorterer, laget to variabler hvor den ene blir en date, den andre en annen, trekker dem fra hverandre. (Sånn AC gjorde det med newdate)
//Sort newdate javascript (StackOverflow) -> https://stackoverflow.com/questions/10123953/how-to-sort-an-object-array-by-date-property (nr.9)
//skrive date?.
//getDetailsOfGame (inne på dokumentasjonen, lag et nytt API-kall på id-en eller slugen, f.eks på GamePage).
