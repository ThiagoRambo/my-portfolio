import Header from './pages/components/Header/Header';
import Hero from './pages/sections/Hero/Hero';
import About from './pages/sections/About/About';
import Projects from './pages/sections/Projects/Projects';
import Footer from './pages/components/Footer/Footer';

import Aosinit from './pages/components/Aos/Aosinit';
import './App.css'

export default function App(){
  return(
    <>
    <div className='app'>
      <Aosinit/>
      <Header/>

      <Hero/>
      <About/>
      <Projects/>

      <Footer/>
    </div>
    </>
  )
}