import React from 'react';
import { useParams } from 'react-router-dom';

export default function GamePage ({game}) { 

    const {slug} = useParams();
    console.log(game)

    return (
        <section>
            <h2>{game?.name}</h2>
            <img  width="100" height="100" src={game?.background_image !== null ? game?.background_image : "https://cdn.pixabay.com/photo/2017/08/07/18/39/xbox-2606608_1280.jpg"} alt={game?.name} />
            <p>{game?.rating}</p>
            <p>{game?.genres}</p>
        </section>
    )
}

/*{game.map((index) => (
    <GameCard 
    key={index}/>
    ))}*/