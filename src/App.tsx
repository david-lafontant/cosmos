import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import NoPage from './pages/nopage/NoPage';

function App() {


  return (
    <React.Fragment>
      <Header />
      <Home />
      <About />
      <Contact />
      <NoPage />
    </React.Fragment>
  );
}

export default App
