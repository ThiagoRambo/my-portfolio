import './Footer.css';
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaWhatsapp  } from "react-icons/fa"; // Font Awesome 5

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <nav>
          <ul className="footer-links">
            <li>
            <Link to="header" smooth={true} duration={900}>Início</Link>
            </li>
            <li>
            <Link to="about" smooth={true} duration={900}>Sobre mim</Link>
            </li>
            <li>
            <Link to="projects" smooth={true} duration={900}>Projetos</Link>
            </li>
          </ul>
        </nav>

        <nav className='nav-icons-footer'>
          <ul className='ul-icons-footer'>

            <a className='a-icons-footer' target='_blank' href="https://github.com/ThiagoRambo">
              <FaGithub id='icon-github' className='icon-footer'/>
            </a>

            <a className='a-icons' target='_blank' href="https://www.linkedin.com/in/thiago-rambo-a9897424a/">
              <FaLinkedin id='icon-linkedin' className='icon-footer'/>
            </a>

            <a className='a-icons-footer' target='_blank' href="https://www.instagram.com/thiago_rambo/">
              <FaInstagram id='icon-instagram' className='icon-footer'/>
            </a>

            <a className='a-icons-footer' target='_blank' href="mailto:thiagofrickrambo@hotmail.com">
              <FaEnvelope id='icon-email' className='icon-footer'/>
            </a>

            <a className='a-icons-footer' target='_blank' href="https://wa.me/5577999018695">
              <FaWhatsapp id='icon-whatsapp' className='icon-footer'/>
            </a>

          </ul>
        </nav>

        <p>&copy; {new Date().getFullYear()} Thiago Rambo. Todos os direitos reservados.</p>
        
      </div>
    </footer>
  );
}
