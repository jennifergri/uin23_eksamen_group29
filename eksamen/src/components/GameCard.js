import React from 'react';
import { useEffect, useState } from "react";
import GamePage from './GamePage';

export default function GameCard() { 

    //API-nøkkel: 97ef2c2ae8e64769b34f2e83f4c1f037
    const [game, setGame] = useState(null)

    const getGame = async() => {
        const response = await fetch('https://api.rawg.io/api/games?key=97ef2c2ae8e64769b34f2e83f4c1f037&ordering=released&page_size=3&page=1&dates=2023-01-01,2023-12-31')
        const data = await response.json()
        setGame(data.results)
        console.log(data)
    }

    useEffect(() => {
        getGame()
    },[]);

    return (
        <>
        {/* {game?.map((item, index) => (
            <GamePage key={index}/>
        ))} */}

        {game?.map((item, index) => (
            <article key={index}>
                <img  width="50" height="50" src={item.background_image !== null ? item.background_image : "https://cdn.pixabay.com/photo/2017/08/07/18/39/xbox-2606608_1280.jpg"} alt={item.name} />
                <h3>{item.name}</h3>
            </article>
        ))}

        {/* <article>
            <img src={game.background_image !== "null" ? game.background_image : "https://cdn.pixabay.com/photo/2017/08/07/18/39/xbox-2606608_1280.jpg"} alt={game.name}/>
            <h3>{game.name}</h3>
        </article> */}
        </>
    )
}