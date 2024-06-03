import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import { About, Contact, Home, NoPage } from './pages/index'

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
