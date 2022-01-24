import React from 'react';
import { BrowserRouter as Router,Switch } from 'react-router-dom';
import Nav from './components/Nav/Nav';


/* IMPORTS */ 
import About from './sections/About/About';
import Contact from './sections/Contact/Contact';
import Home from './sections/Home/Home';

const App = () => {
  return (
    <Router>
    <div className='App'>
     
        <Nav />
     
        <Home />
        <Contact />
        <About />
    </div>
    </Router>
  )
}

export default App;

