import React from 'react';
import Header from '../componets/header.js';
import '../styles/home.css';
import Sucursal from '../assets/images/sucursal.png'
import Footer from '../componets/footer.js';
import MyCarousel from '../componets/carousel.js';


const Sucursales = () => {
  return (
    <div>
      <MyCarousel/>
      <Header /> 
      <div class="container">
      <div class="text-center">
        <h1>Sucursales</h1>
     </div> 
     <div class="text-center">
      <a href='https://www.google.com.mx/maps/search/Caja+Inmaculada/@20.6033059,-100.384768,15z/data=!3m1!4b1?entry=ttu'>
     <img
          src={Sucursal}
          className="card-img"
          alt="Sucursal"
          style={{ width: '100%', height: 'auto', marginTop:10}}
        />
        </a>
  </div>
    </div>
      <Footer />
    </div>
  );
}

export default Sucursales;
