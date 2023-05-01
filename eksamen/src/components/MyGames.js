import GameCard from "./GameCard"

export default function MyGames({mygames}){
   
     return (
        <>
        <h2>Shop</h2>

        {mygames?.slice(0, 20).map((index) => {
            return <GameCard key={index} />
        })}
        </>
     )
}