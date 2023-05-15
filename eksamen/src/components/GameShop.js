import GameCard from "./GameCard"

export default function GameShop({games}){

    return (
        <>
        <h2>Shop</h2>
        
        {games?.slice(0, 10).map((game, index) => {
            return <GameCard key={index} game={game} />
        })}
        </>
    )
}
//Filtrere ut de 10 nyeste her.S