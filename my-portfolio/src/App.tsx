import Header from './pages/components/Header/Header';
import About from './pages/sections/About/About';
import Hero from './pages/sections/Hero/Hero';
// import Projects from './pages/sections/Projects/Projects';

import './App.css'

export default function App(){
  return(
    <div className='.app'>
      <Header/>

      <Hero/>
      <About/>
      {/* <Projects/> */}
      
    </div>

  )
}
