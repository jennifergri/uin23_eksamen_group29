import GameCard from "./GameCard"

export default function GameShop({games}){

    return (
        <>
        <main>
            <h2>Shop</h2>
            
            <section className="gameshop">
                {games?.slice(0, 10).map((game, index) => {
                    return <GameCard key={index} game={game} />
                })}
            </section>
        </main>
        </>
    )
}
