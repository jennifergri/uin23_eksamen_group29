import React from 'react';
import { Link } from 'react-router-dom';

export default function GameCard({game, index}) { 

    return (
        <>
        <article key={index}>
            <Link to={`/${game?.slug}`}>
                <img  width="50" height="50" src={game?.background_image !== null ? game?.background_image : "https://cdn.pixabay.com/photo/2017/08/07/18/39/xbox-2606608_1280.jpg"} alt={game?.name} />
                <h3>{game?.name}</h3>
            </Link>
        </article>
        </>
    )
}