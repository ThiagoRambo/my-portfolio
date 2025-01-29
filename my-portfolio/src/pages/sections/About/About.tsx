import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css'

import { FaReact, FaNodeJs, FaHtml5, FaCss3  } from "react-icons/fa"; // Font Awesome 5
import { SiTypescript, SiTailwindcss, SiJavascript  } from "react-icons/si"; // Simple Icons


export default function About() {

  const timeLine = useRef<gsap.core.Timeline | null>(null);

// ------------------------------------------------

  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".container-about-geral",{
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".container-box2",
        scrub: true,
        markers: false,
        start: 'top 550px',
        end: 'bottom 850px',
      }
    })

    return () => {
      gsap.killTweensOf(".container-about-geral");
    }

  }, [])

// ------------------------------------------------

useLayoutEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  timeLine.current = gsap.timeline({
    scrollTrigger: {
      trigger: ".nav-skills",
      scrub: false,
      markers: false,
      start: "top 730px",
      end: "bottom 850px",
    }
  })
  .fromTo(
    ".li-skills",
    {
      opacity: 0,
      y: -150,
      scale: 0.5,
      rotate: -50,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.1
    }
  );

  return () => {
    gsap.killTweensOf(".nav-skills");
  };
}, []);

// ------------------------------------------------

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/curriculo.pdf';
    link.download = 'Cúrriculo_Thiago_Rambo.pdf';
    link.click();
  };

  return(
    <div id='about' className='container-box2'>
      <div className='container-about-geral'>

        <div className='container-sobre-block'>

          <div className='container-sobre'>
            <h1>Sobre mim</h1>

            <p>Meu nome é Thiago Rambo, sou formado em Engenharia de Software e estou em busca de me desenvolver cada vez mais como programador fullstack. Minha principal motivação é aplicar meus conhecimentos para promover melhorias e inovações que impactem positivamente empresas e pessoas.</p>
          </div>

          <div className='container-cv'>
            <h1>Cúrriculo</h1>
            <p>Para mais informações, baixar meu cúrriculo.</p>
            <button className='btn-cv' onClick={handleDownload}>Download</button>
          </div>

        </div>

        <div className='container-skills'>
          <h1>Tecnologias</h1>

          <nav className='nav-skills'>

            <ul className='ul-skills' >

              <li className='li-skills'>
              <span><FaReact className='icon-skills'/></span>
              <p>ReactJS</p>
              </li>

              <li className='li-skills'>
              <span><FaNodeJs className='icon-skills'/></span>
              <p>NodeJS</p>
              </li>

              <li className='li-skills'>
              <span><SiTypescript className='icon-skills'/></span>
              <p>TypeScript</p>
              </li>

              <li className='li-skills'>
              <span><FaReact className='icon-skills'/></span>
              <p>React Native</p>
              </li>

              <li className='li-skills'>
              <span><SiTailwindcss className='icon-skills'/></span>
              <p>Tailwind</p>
              </li>
              
              <li className='li-skills'>
              <span><FaHtml5 className='icon-skills'/></span>
              <p>Html5</p>
              </li>

              <li className='li-skills'>
              <span><FaCss3 className='icon-skills'/></span>
              <p>Css3</p>
              </li>

              <li className='li-skills'>
              <span><SiJavascript className='icon-skills'/></span>
              <p>Javascript</p>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}