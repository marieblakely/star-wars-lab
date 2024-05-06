//npm modules
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
//services

//css
import './StarshipList.css'

const StarshipList = () => {
//Initialize starshipList state:
const [starshipList, setStarshipList] = useState([])

useEffect(() => {
  const fetchStarshipList = async () => {
    //API Call
    const starshipData = await getAllStarships()
    setStarshipList(starshipData.results)
  }
  fetchStarshipList()
}, [])

if(!StarshipList.length) return <h1>Loading Starships...</h1>



  return ( 
    <>
    <div className="page-container">
      <h1 className="animate__animated animate__fadeInUpBig">Starships!</h1>
      <main className="starship-list">
        {starshipList.map((starship, idx) =>
          <div className="starship-card"
          key={idx}>
          <Link to={`/starships/${starship.url.replace("https://swapi.dev/api/starships/", "")}`}> {starship.name} </Link>
          </div>
        )}
      </main>
    </div>
    </>
  )
}

export default StarshipList;