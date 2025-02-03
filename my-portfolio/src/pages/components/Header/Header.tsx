import './Header.css';
import { Link } from "react-scroll";

export default function Header() {
  return(

  <header  id='header' className='container-header'>
      <div>
        <nav>
          <ul className='content-ul'>

            <Link to="about" smooth={true} duration={900}>Sobre mim</Link>
            <Link to="projects" smooth={true} duration={900}>Projetos</Link>

          </ul>
        </nav>
      </div>
  </header>
  )
}

