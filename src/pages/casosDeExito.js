import React from 'react';
import Header from '../componets/header.js';
import MyCarousel from '../componets/carousel.js';
import Footer from '../componets/footer.js';
import VideoCard from '../componets/videoCard.js';


const CasosDeExito = () => {
  return (
    <div>
      <MyCarousel/>
      <Header />   
      <div class="container">
        <div className='text-center'>
           <h1>Casos De Exito</h1>
        </div>
        <div class="row">
      <VideoCard/>
      </div>
     </div>  
      <Footer />
    </div>
  );
}

export default CasosDeExito;
