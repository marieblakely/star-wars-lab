//npm modules
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return ( 
    <header>
      <nav>
      <Link to="/starships">STAR WARS STARSHIPS</Link>
      </nav>
    </header>
  )
}

export default NavBar;