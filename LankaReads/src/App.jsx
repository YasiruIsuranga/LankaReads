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
import OpenPage from './pages/OpenPage/OpenPage';

function App() {

  return (
    <>
    <div className='app-container'>

    <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Books' element={<Books />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Authors' element={<Authors />} />
          <Route path='/Blogs' element={<Blogs />} />
          <Route path='/Register' element={<Register />} />
          <Route path="/OpenPage/:bookId" element={<OpenPage />} />
          <Route path="/Payment" element={<Payment />} />
        </Route>
      </Routes>
    </div>
    </>
  )
}

export default App
