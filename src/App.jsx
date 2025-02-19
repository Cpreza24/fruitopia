import { useState } from 'react';
import { Route, Routes } from 'react-router';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Fruits from './components/Fruits/Fruits';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Fruits />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
