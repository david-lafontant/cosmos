import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import { Astra, Layout } from './components/index';
import { About, Gallery, Home, NoPage } from './pages/index'



function App() {


  return (
    <BrowserRouter>
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="astra/:slug" element={<Astra />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App
