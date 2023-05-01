import { useEffect, useState } from "react"

export default function GameShop(){
    
    //API-nøkkel: 97ef2c2ae8e64769b34f2e83f4c1f037
    const [shop, setShop] = useState(null)

    const getShop = async() => {
        const response = await fetch('https://api.rawg.io/api/games?key=97ef2c2ae8e64769b34f2e83f4c1f037&ordering=-released&page_size=10&page=1&dates=2023-01-01,2023-12-31')
        const data = await response.json()
        setShop(data.results)
        console.log(data)
    }

    useEffect(() => {
        getShop()
    },[]);

    return (
        <>
        <h2>Shop</h2>
        {shop?.map((item, index) => (
            <article key={index}>
                <img  width="50" height="50" src={item.background_image !== null ? item.background_image : "https://cdn.pixabay.com/photo/2017/08/07/18/39/xbox-2606608_1280.jpg"} alt={item.name} />
                <h3>{item.name}</h3>
            </article>
        ))}
        </>
    )
}