import GameCard from "./GameCard"

export default function GameShop({games}) {

    return (
        <>
        <main>
            <h2>Shop</h2>
            
            <section className="gameshop">
                {games?.slice(0, 10).map((game, index) => {
                    return <GameCard key={index} game={game} />
                })}
            </section>
            {/* Kilde: Brukt slice metoden for å dele opp objektene i arrayen til APIet basert på index:
                https://lms.webtricks.blog/kurs/innforing-i-programmering/arrayer-og-objekter/arrayer#h919312c0e8c5*/}
        </main>
        </>
    )
}
