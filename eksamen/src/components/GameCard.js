import React from 'react';
import { useEffect, useState } from "react";

export default function GameCard () { 

    //API-nøkkel: 97ef2c2ae8e64769b34f2e83f4c1f037
    const [game, setGame] = useState([])

    const getGame = async() => {
        const response = await fetch (`https://api.rawg.io/api/platforms?key=97ef2c2ae8e64769b34f2e83f4c1f037`)
        const data = await response.json()
        setGame(data)
        console.log(game)
    }

    useEffect(() => {
        getGame()
    },[])

    return (
        <article>
            <img src="" />
            <h3></h3>
        </article>
    )
}