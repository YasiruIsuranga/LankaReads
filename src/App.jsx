import { useState } from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';

import About from './pages/about/About';
import Books from './pages/books/Books';
import Contact from './pages/contact/Contact';
import Authors from './pages/Authors/Authors';
import Blogs from './pages/Blogs/Blogs';
import Register from './pages/Register/Register';
import Payment from './pages/Payment/Payment';

function App() {

  return (
    <>
    <div className='app-container'>

      <Payment/>
    </div>
    </>
  )
}

export default App
