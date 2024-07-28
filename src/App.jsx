import { useState } from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Header from './components/Header/Header';

function App() {

  return (
    <>
    <div className='app-container'>

      <Header />

      <Routes>
        <Route>
          <Route path='/' element={<Home />} />
        </Route>
      </Routes>
    </div>
    </>
  )
}

export default App
