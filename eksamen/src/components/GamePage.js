import React from 'react';
import GameCard from "./GameCard";

export default function GamePage ({game}) { 
    return (
        <section>
            {game.map((index) => (
                <GameCard 
                key={index}/>
            ))}
        </section>
    )
}