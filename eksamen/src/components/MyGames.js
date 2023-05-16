import React from "react";
import GameCard from "./GameCard";

export default function MyGames({games}) {
    
  return (
    <>
      <h2>My Games</h2>

      {games?.slice(0, 20).map((game, index) => (
        <GameCard key={index} game={game} />
      ))}
    </>
  );
}