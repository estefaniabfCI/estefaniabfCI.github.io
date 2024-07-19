import React from 'react';
import Header from '../componets/header.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from '../componets/footer.js';
import CardText from '../componets/cardText.js';
import MyCarousel from '../componets/carousel.js';


const ProveedoraInmaculada = () => {
  return (
    <div>
      <MyCarousel/>
      <Header />    
      <div className='container'>
      <div className="text-center" style={{marginTop:"30px"}}>
     <h1>Proveedora Inmaculada</h1>
     </div>
     <CardText></CardText>
     </div> 
      <Footer />
    </div>
  );
}

export default ProveedoraInmaculada;
