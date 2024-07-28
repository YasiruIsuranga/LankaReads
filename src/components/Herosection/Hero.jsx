import React, { useState, useEffect } from 'react';
import './Hero.css';
import image1 from '../../img/Kutse.jpg'
import image2 from '../../img/book2.jpg'
import image3 from '../../img/mgmt-matters-teamwork-katleho-Seisa-GettyImages.jpg'
import image4 from '../../img/main.jpeg'
import CardSlider from '../CardSlider/CardSlider';


const images = [
  image1,
  // image2,
  // image3,
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
    <div className="col-lg-12 hero-container">
      <img src={images[currentImage]} alt="Hero" className="hero-image" />
      <div className="col-lg-5 d-flex flex-column text-align-start hero-overlay">
        <p className='welcome'>Welcome to...</p>
        <p className='m-20 lanka'>Lanka Reads</p>
        <div className='col-lg-8 d-flex flex-row justify-content-around beRA'>
          <p>Be a Reader</p>
          <p>Be a Auther</p>
        </div>
        <p className='dis'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum suscipit sint hic sequi. Eius maxime, eaque quidem dicta odit corrupti sit dolorum, commodi minus explicabo esse. Quaerat eligendi perspiciatis dolore!</p>
      </div>
      <div className='col-lg-6 h-80 w-100 d-flex flex-column align-items-end justify-content-bottom-50 card-space'>
      <CardSlider />
      </div>
    </div>
  );
};

export default Hero;
