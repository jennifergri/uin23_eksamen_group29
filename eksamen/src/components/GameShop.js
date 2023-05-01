
import GameCard from "./GameCard"

export default function GameShop({getGame, games}){

    return (
        <>
        <h2>Shop</h2>
        {games?.map((shop) => (
            <GameCard key={shop.index} item={shop.item} getGame={getGame}/>
        ))}
        </>
    )
}