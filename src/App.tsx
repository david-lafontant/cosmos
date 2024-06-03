import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Layout from './components/layout/Layout';
import { About, Contact, Home, NoPage } from './pages/index'

function App() {


  return (
    <BrowserRouter>
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App
