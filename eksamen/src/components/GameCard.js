import React from 'react';
import { Link } from 'react-router-dom';

export default function GameCard({game, index}) { 

    return (
        <>
        <article className='gamecard' key={index}>
            {/* Template literal: */}
            <Link to={`/${game?.slug}`}>
                <img src={game?.background_image !== null ? game?.background_image : "https://cdn.pixabay.com/photo/2017/08/07/18/39/xbox-2606608_1280.jpg"} alt={game?.name} />
                <h3>{game?.name}</h3>
                <p>{game?.genres?.map((g, index) => (
                    <span key={index}>{g?.name}{(index !== game?.genres.length - 1 ? ', ' : '')} </span>
                    /*For fjerning av komma når det ikke er mere informasjon kilde:
                     https://www.appsloveworld.com/reactjs/100/10/how-to-add-a-comma-in-array-map-after-every-element-except-last-element-in-react?utm_content=cmp-true */
                ))}</p>
                <button className='readbutton'>Read more</button>
            </Link>
        </article>
        </>
    )
}