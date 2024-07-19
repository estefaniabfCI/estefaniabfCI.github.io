import React from 'react';
import Header from '../componets/header.js';
import Footer from '../componets/footer.js';
import imagen1 from '../assets/images/folletoCoche.jpg'
import MyCarousel from '../componets/carousel.js';
import '../styles/media.css'

const MediaWeb = () => {
  return (
    <div>
       <MyCarousel />
      <Header /> 
      <div className='espacio'></div>   
      <div class="container"> 
      <div className='phoneFrame'>
        <img src={imagen1} alt='Imagen en celular' className='phoneImage'/>
      </div>
      </div>
      <div className='espacio'></div>
      <Footer />
    </div>
  );
}

export default MediaWeb; 
