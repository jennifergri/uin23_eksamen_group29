import React from "react";
import GameCard from "./GameCard";

export default function MyGames({games}) {
    
  return (
    <>
    <main>
      <h2>My Games</h2>

      <section className="mygames">
        {games?.slice(0, 20).map((game, index) => (
          <GameCard key={index} game={game} />
        ))}
      </section>
    </main>
    </>
  );
}