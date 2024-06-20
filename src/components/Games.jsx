import { useState, useEffect } from "react"

export const GamesList = () => {

    const [allGames, setAllGames] = useState([])

    const getAllGames = async () => {
        const response = await fetch("http://localhost:8000/games", {
            headers: {
                "Authorization" : `Token ${JSON.parse(localStorage.getItem("game_token")).token}`
            }
        })
        const games = await response.json()
        setAllGames(games)
    }

    useEffect(() =>{
        getAllGames()
    }, [])


    return (
        <>
            <section>
                {allGames.map(game => <div
                key={`game-${game.id}`}
                >{game.title}</div> )}
            </section>
        </>
    )
}