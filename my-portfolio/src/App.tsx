import Header from './pages/components/Header/Header';
import Hero from './pages/sections/Hero/Hero';
import About from './pages/sections/About/About';
// import Skills from './pages/sections/Skills/Skills';
import Projects from './pages/sections/Projects/Projects';
import Footer from './pages/components/Footer/Footer';

import './App.css'

export default function App(){
  return(
    <>
    <div className='.app'>
      <Header/>

      <Hero/>
      <About/>
      {/* <Skills/> */}
      <Projects/>

      <Footer/>
    </div>
    </>
  )
}
