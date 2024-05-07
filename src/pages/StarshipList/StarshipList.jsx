//npm modules
import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
//services
import { getAllStarships } from "../../Services/sw-api"
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
      console.log(starshipData.results)
    } 
    fetchStarshipList()
  }, [])

  if(!starshipList.length) return <h1>Loading Starships...</h1>


  return ( 
    <>
    <div className="page-container">
      <h1 className="animate__animated animate__fadeInUpBig">STARSHIPS!</h1>
      <main className="starship-list">
        {starshipList.map((starship, idx) =>
          <NavLink key={idx} to={`/starships/${starship.url.slice(32)}`}>
            <div className="starship-card" >
              {starship.name}
            </div>
          </NavLink>
        )}
      </main>
    </div>
    </>
  )
}

export default StarshipList;