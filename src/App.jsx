import { useState } from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/footer';
import Subscription from './components/Subscription/subscription';
import Overview from './components/Overview/overview';
import Features from './components/Features/features';
import Recomended from './components/Recomand/recomended';

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
      <Features/>
      <Recomended/>
      <Overview/>
      <Subscription/>
      <Footer/>
    </div>
    </>
  )
}

export default App
