import React, { useState, useEffect } from 'react';
import './App.css';


import HomePage from './Components/HomePage';
import { Shop } from './Components/Shop';
import ProductDetail from './Components/ProductDetail';
import FPage from './Components/FPage';
import About from './Components/About';
import Contact from './Components/Contact';
import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
function App() {
  const location = useLocation();

  useEffect(() => {
    console.log('Current Path:', location.pathname); 
    setTimeout(() => window.scrollTo(0, 0), 0);
  }, [location.pathname]);


  return (
    <div className="App">
  
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Shop/:categoryName" element={<Shop />} />
      <Route path="/Product/:id" element={<ProductDetail />} />
      <Route path="/Favourite" element={<FPage />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
 
  </div>
    
    );
}

export default App;

