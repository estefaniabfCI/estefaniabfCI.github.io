import React from 'react';
import Header from '../componets/header.js';
import Footer from '../componets/footer.js';
import ArticuloContent from '../componets/articuloContent.js';


const Articulo = () => {
  return (
    <div>
       <Header />  
    <div className='container'>
     <ArticuloContent/>
    </div>
    <Footer />
    </div>
  );
}

export default Articulo;
