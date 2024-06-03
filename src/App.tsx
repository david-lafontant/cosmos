import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';

function App() {


  return (
    <React.Fragment>
      <Header />
      <Home />
      <About />
      <Contact />
    </React.Fragment>
  );
}

export default App
