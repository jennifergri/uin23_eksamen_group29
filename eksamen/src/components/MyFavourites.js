import GameCard from "./GameCard";

export default function MyFavourites({games}){
    
  return (
    <>
      <h2>My Favourites</h2>

      {games?.map((game, index) => {
          return <GameCard key={index} game={game} />
      })}
    </>
  );
}