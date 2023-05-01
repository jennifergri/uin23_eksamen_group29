import { useEffect, useState } from "react"
import GameCard from "./GameCard"

export default function MyGames(){

     //API-nøkkel: 97ef2c2ae8e64769b34f2e83f4c1f037
     const [mygames, setMyGames] = useState(null)
       
     const getMyGames = async() => {
         const response = await fetch('https://api.rawg.io/api/games?key=97ef2c2ae8e64769b34f2e83f4c1f037&ordering=-released&page=1&page_size=20&page=1&dates=2023-01-01,2023-12-31&genres=adventure')
         const data = await response.json()
         setMyGames(data.results)
         console.log(data)
     }
 
     useEffect(() => {
         getMyGames()
     },[]);
   
     return (
        <>
        <h2>Shop</h2>

        {mygames?.slice(0, 20).map((index) => {
            return <GameCard key={index} />
        })}
        </>
     )
}