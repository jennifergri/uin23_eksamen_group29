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
      {/* Kilde: Brukt slice metoden for å dele opp objektene i arrayen til APIet basert på index:
                https://lms.webtricks.blog/kurs/innforing-i-programmering/arrayer-og-objekter/arrayer#h919312c0e8c5*/}
    </main>
    </>
  );
}