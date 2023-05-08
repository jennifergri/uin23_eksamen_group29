import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function GamePage ({game, favourites, setFavourites}) { 

    const {slug} = useParams();
    const oneGame = game?.find((g) => g.slug === slug)

    const handleFavorite = () => { 
        // Sjekker om spillet allerede ligger i favoritter
        const alreadyAdded = favourites.some(game => game.id === oneGame.id)

        // Hvis den ikke ligger i array så legg til
        // push fungerer ikke, så fant denne hehehe: https://stackoverflow.com/questions/54676966/push-method-in-react-hooks-usestate
        if(!alreadyAdded) {
            setFavourites([...favourites, oneGame])
        }
    }

    return (
        <article>
            <h2>{oneGame?.name}</h2>
            <img width="200" height="200" src={oneGame?.background_image !== null ? oneGame?.background_image : "https://cdn.pixabay.com/photo/2017/08/07/18/39/xbox-2606608_1280.jpg"} alt={oneGame?.name} />
            
            <section>
                <p>Genres: {oneGame?.genres?.map((g, index) => (
                    <span key={index}>{g?.name}, </span>
                ))}</p>

                <p>Rating: {oneGame?.rating !== 0 ? oneGame?.rating: "Not Available"}</p>
                <p>Playtime: {oneGame?.playtime !== 0 ? oneGame?.playtime : "Not Available"}</p>
                <p>Plot: </p>
                <p>Developers: </p>
                <p>Publisher: </p>
                <p>Released: {oneGame?.released !== 0 ? oneGame?.released : "Not Available"}</p>

                <p>Platforms: {oneGame?.platforms?.map((g, index) => (
                    <span key={index}>{g?.platform.name}, </span>
                ))}</p>
            
                <p>Stores: {oneGame?.stores?.map((g, index) => (
                    <span key={index}>{g?.store.name}, </span>
                ))}
                </p>
            </section>

            <button onClick={handleFavorite}>Add to favourites</button>
        </article>
    )
}
