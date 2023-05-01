import GameCard from "./GameCard"

export default function MyGames({games}){
   
     return (
        <>
        <h2>Shop</h2>

        {games?.slice(0, 20).map((game, index) => {
            return <GameCard key={index} game={game}/>
        })}
        </>
     )
}