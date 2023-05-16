import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function GamePage ({game, favourites, setFavourites}) { 

    const {slug} = useParams();
    const oneGame = game?.find((g) => g.slug === slug)
    const [info, setInfo] = useState(null)

    /* Gjør et nytt API kall, hvor vi henter ut mer informasjon med slug */
    const getInfo = async() => {
        const response = await fetch(`https://api.rawg.io/api/games/${slug}?key=94d35c9276c5445c8b0987bb5754074f`)
        const data = await response.json()
        setInfo(data)
        console.log(data)
    }

    useEffect(() => {
        getInfo()
    },[]);

    const handleFavorite = () => { 
        // Sjekker om spillet allerede ligger i favoritter
        const alreadyAdded = favourites.some(game => game.id === oneGame.id)

        // Hvis den ikke ligger i array så legg til
        // push fungerer ikke, så fant denne: https://stackoverflow.com/questions/54676966/push-method-in-react-hooks-usestate
        if(!alreadyAdded) {
            setFavourites([...favourites, oneGame])
        }
    }

    return (
        <article>
            <h2>{info?.name}</h2>
            <img className='gamepage-img' src={info?.background_image !== null ? info?.background_image : "https://cdn.pixabay.com/photo/2017/08/07/18/39/xbox-2606608_1280.jpg"} alt={info?.name} />
            
            <section>

                {info?.genres.length > 0 &&
                    <p>Genres: {info?.genres?.map((g, index) => (
                        <span key={index}>{g?.name}{(index !== info.genres.length - 1 ? ', ' : '')} </span>
                    ))}</p>
                }

                {info?.rating !== 0 &&
                    <p>Rating: {info?.rating}</p>
                }
                
                {info?.playtime !== 0 && 
                    <p>Playtime: {info?.playtime}</p>
                }

                {info?.tags.length > 0 &&
                    <p>Tags: {info?.tags?.map((g, index) => (
                        <span key={index}>{g?.name}, </span>
                    ))}</p> 
                }
                
                {info?.developers.length > 0 &&
                    <p>Developers: {info?.developers?.map((g, index) => (
                        <span key={index}>{g?.name}{(index !== info.developers.length - 1 ? ', ' : '')} </span>
                    ))}</p>
                }

                {info?.publishers.length > 0 &&
                    <p>Publisher: {info?.publishers?.map((g, index) => (
                        <span key={index}>{g?.name}{(index !== info.publishers.length - 1 ? ', ' : '')} </span>
                    ))} </p>
                }

                {info?.released !== null &&
                    <p>Released: {info?.released}</p>
                }

                {info?.platforms.length > 0 &&
                    <p>Platforms: {info?.platforms?.map((g, index) => (
                        <span key={index}>{g?.platform.name}{(index !== info.platforms.length - 1 ? ', ' : '')} </span>
                    ))}
                    </p>
                }
            
                {info?.stores.length > 0 &&
                    <p>Stores: {info?.stores?.map((g, index) => (
                        <span key={index}>{g?.store.name}{(index !== info.stores.length - 1 ? ', ' : '')} </span>
                    ))}
                    </p>
                }

                {info?.description_raw && 
                    <p>Description: {info?.description_raw}</p>
                }
            </section>

            <button onClick={handleFavorite}>Add to favourites</button>
        </article>
    )
}
