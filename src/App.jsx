import { useState } from 'react';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Fruits from './components/Fruits/Fruits';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Fruits />
      <Footer />
    </>
  );
}

export default App;
