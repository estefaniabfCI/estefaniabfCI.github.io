import React from 'react';
import Header from '../componets/header.js';
import Footer from '../componets/footer.js';
import ImagenCard from '../componets/imagenCard.js';
import MyCarousel from '../componets/carousel.js';

const ArticulosOpinion = () => {
  return (
    <div>
      <MyCarousel/>
      <Header />     
      <div className='container'>
      <div class="text-center">
        <h1>Articulos de Opinion</h1>
        </div>
      <div className='row'>
      <ImagenCard/>
     </div>
     </div>
      <Footer />
    </div>
  );
}

export default ArticulosOpinion;
