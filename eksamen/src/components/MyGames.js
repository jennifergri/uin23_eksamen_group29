import React from "react";
import GameCard from "./GameCard";

export default function MyGames({games}){
   
    const adventureGames = games?.filter(game => game?.genres[0]?.slug === 'adventure')
    console.log(games?.filter(game => game?.genres[0]?.slug === 'adventure'))
    //console.log(games?.map((game) => game?.genres.filter((genre) => genre.slug === 'action')))

    /*Kilde: .filter metoden https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter */

     return (
        <>
        <h2>Shop</h2>
        {adventureGames?.slice(0, 20).map((game, index) => {
            return <GameCard key={index} game={game}/>
        })}
        </>
     )
}