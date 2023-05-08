import GameCard from "./GameCard";

export default function MyFavourites({games}){
    //lage en state som lagrer på det du spillet du vil ha her. 
  
    //Når man trykker på add to favourties så skal dette spillet lagres her. 
    //Favorittene som lagrer skal også syntes på forsiden. 
    return (
        <>
        <h2>My Favourites</h2>
        {games?.map((game, index) => {
            return <GameCard key={index} game={game} />
        })}
      </>
      );
    }