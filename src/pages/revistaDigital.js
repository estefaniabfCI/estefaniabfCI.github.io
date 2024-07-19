import React from 'react';
import Header from '../componets/header.js';
import '../styles/revistaDigital.css';
import revista1 from '../assets/images/revista2.jpg'
import revista from '../assets/images/revista.jpg'
import Footer from '../componets/footer.js';
import MyCarousel from '../componets/carousel.js';


const Revista = () => {
  return (
    <div className='divHome'>
      <MyCarousel/>
      <Header /> 
      <div className='rowRev'>
      <div className="container-rev">
      <div className='espacioRev'></div>
       <a href='https://google.com'><img src={revista1} className="revista-img" alt=''/></a>
      </div>
      <div className="container-rev">
      <a href='https://google.com'> <img src={revista} className="revista-img" alt=''/></a>
      </div>
      </div>  
      <div>
      </div>  
      <div className='espacioRev'></div>
      <Footer />
    </div>
  );
}

export default Revista;
