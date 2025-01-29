import './Header.css';
import { Link } from "react-scroll";

export default function Header() {
  return(

  <header className='container-header'>
      <div>
        <nav>
          <ul className='content-ul'>

            <Link to="about" smooth={true} duration={900}>About</Link>
            <Link to="projects" smooth={true} duration={900}>Projects</Link>

          </ul>
        </nav>
      </div>
  </header>
  )
}

