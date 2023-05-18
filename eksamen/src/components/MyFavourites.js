import GameCard from "./GameCard";

export default function MyFavourites({games}) {
    
  return (
    <>
    <main>
      <h2>My Favourites</h2>
      
      <section className="favourites">
        {games?.map((game, index) => {
            return <GameCard key={index} game={game} />
        })}
      </section>
    </main>
    </>
  );
}