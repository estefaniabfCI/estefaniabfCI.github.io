import React from 'react';
import Header from '../componets/header.js';
import CardHome from '../componets/cardHome.js';
import Footer from '../componets/footer.js';
import MyCarousel from '../componets/carousel.js';


const Noticias = () => {
  return (
    <div>
       <MyCarousel/>
       <Header />  
    <div className='container'>
    <div class="text-center">
        <h1>Noticias</h1>
        </div>
      <div className='row text-center'>
        <CardHome/>
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default Noticias;
