import React, { useState, useEffect } from 'react';
import './Hero.css';
import image1 from '../../img/Kutse.jpg';
import image3 from '../../img/wallpaper2.webp';
import image4 from '../../img/wallpaper1.jpg';
import CardSlider from '../CardSlider/CardSlider';

const images = [
  image1,
  image3,
  image4
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-container">
      <img src={images[currentImage]} alt="Hero" className="hero-image" />
      <div className="hero-overlay">
        <p className='welcome'>Welcome to...</p>
        <p className='m-20 lanka'>Lanka Reads</p>
        <div className='d-flex justify-content-around beRA'>
          <p>Be a Reader</p>
          <p>Be an Author</p>
        </div>
        <p className='dis'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum suscipit sint hic sequi. Eius maxime, eaque quidem dicta odit corrupti sit dolorum, commodi minus explicabo esse. Quaerat eligendi perspiciatis dolore!
        </p>
        <div className='card-slider-container'>
          <CardSlider />
        </div>
      </div>
    </div>
  );
};

export default Hero;
