import React from 'react';
import { useEffect, useState } from "react";
//import GamePage from './GamePage';

export default function GameCard() { 

    //API-nøkkel: 97ef2c2ae8e64769b34f2e83f4c1f037
    const [game, setGame] = useState([])

    const getGame = async() => {
        const response = await fetch('https://api.rawg.io/api/games?ordering=-released&page_size=3&platforms?key=97ef2c2ae8e64769b34f2e83f4c1f037')
        const data = await response.json()
        setGame(data.results)
        console.log(game)
    }

    useEffect(() => {
        getGame()
    },[]);

    return (
        /*<>
        {game.length <= 3 ? game?.map((item, index) => (
            <GamePage key={index}/>
        )) : null}

        {game.map((item, index) => (
            <article key={index}>
                <img src={item.background_image !== null ? item.background_image : "https://cdn.pixabay.com/photo/2017/08/07/18/39/xbox-2606608_1280.jpg"} alt={item.name} />
                <h3>{item.name}</h3>
            </article>
        ))}
        </>*/

        <article>
            <img src={game.background_image !== "null" ? game.background_image : "https://cdn.pixabay.com/photo/2017/08/07/18/39/xbox-2606608_1280.jpg"} alt={game.name}/>
            <h3>{game.name}</h3>
        </article>
    )
}