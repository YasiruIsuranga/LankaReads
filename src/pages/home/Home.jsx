import React from 'react'
import Hero from '../../components/Herosection/Hero'
import './Home.css';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import SearchBar from '../../components/SearchBar/SearchBar';

function Home() {
  return (
    <div className='home-page'>
      <div className='col-lg-12 d-flex flex-row align-items-center justify-content-between'>
        <div className='col-lg-4'>
        <ProfileCard />
        </div>
        <div className='col-lg-4'>
          <SearchBar />
        </div>
      </div>
      <Hero />
    </div>
  )
}

export default Home