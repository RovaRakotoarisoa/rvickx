import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Container from './components/Container'

/**
*
Lesson 
class devient className 
for devient htmlFor
*/

function App(){
  return(
    <>
      <Navbar title="CSS and Separating JS and JSX" test="YES"/>
      <Container>
        <HeroSection />
      </Container>
    </>
    
  );
}

export default App;
