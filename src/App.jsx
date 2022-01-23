import React from 'react';
import Nav from './components/Nav/Nav';


/* IMPORTS */ 
import About from './sections/About/About';
import Contact from './sections/Contact/Contact';
import Home from './sections/Home/Home';

const App = () => {
  return (
    <div className='App'>
      <Nav />
      <Home />
      <Contact />
      <About />
    </div>
  )
}

export default App;

