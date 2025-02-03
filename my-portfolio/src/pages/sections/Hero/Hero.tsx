import './Hero.css';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaWhatsapp  } from "react-icons/fa"; // Font Awesome 5

export default function Hero(){
  return(

    <div id="hero" className='container-box1'>
      <div  className='container-apresentacao'>
        <h1 className='nome'>Thiago Rambo.</h1>
        <h1 className="iam">Sou um Engenheiro de Software</h1>
        <p className='descricao'>Sou um Desenvolvedor FullStack. Uso a tecnologia para transformar e escalar o seu negócio com tecnologia.</p>

        <nav className='nav-icons'>
          <ul className='ul-icons'>

            <a className='a-icons' target='_blank' href="https://github.com/ThiagoRambo">
              <FaGithub id='icon-github' className='icon'/>
            </a>

            <a className='a-icons' target='_blank' href="https://www.linkedin.com/in/thiago-rambo-a9897424a/">
              <FaLinkedin id='icon-linkedin' className='icon'/>
            </a>

            <a className='a-icons' target='_blank' href="https://www.instagram.com/thiago_rambo/">
              <FaInstagram id='icon-instagram' className='icon'/>
            </a>

            <a className='a-icons' target='_blank' href="mailto:thiagofrickrambo@hotmail.com">
              <FaEnvelope id='icon-email' className='icon'/>
            </a>

            <a className='a-icons' target='_blank' href="https://wa.me/5577999018695">
              <FaWhatsapp id='icon-whatsapp' className='icon'/>
            </a>

          </ul>
        </nav>
      </div>
    </div>


  )
}

