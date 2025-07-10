import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Container from './components/Container'
import HeroSection from './HeroSection'
import About from './About'

/**
*
Lesson 
class devient className 
for devient htmlFor
*/

function App(){
  return(
    <>
      <Navbar />
      <Container>
         <HeroSection />
         <About />
      </Container>
    </>
    
  );
}

export default App;
