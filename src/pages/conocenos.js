import React from 'react';
import Header from '../componets/header.js';
import '../styles/home.css';
import '../styles/conocenos.css';
import MyCarousel from '../componets/carousel.js';
import Footer from '../componets/footer.js';
import X from '../assets/iconos/x.png'
import social from '../assets/iconos/social.png'
import facebook from '../assets/iconos/facebook.png'
import Prensa from '../assets/images/prensa.jpg'


const Conocenos = () => {
  return (
    <div>
      <MyCarousel />
      <Header />    
      <div class="container">
        <div class="text-center">
        <h1>Conocenos</h1>
        </div>
     <div className='row text-center'>
     <a href="https://twitter.com/CajaInmaculada"><img src={X} alt="X" className="r-sociales" /></a><br></br>
        <a href="https://www.facebook.com/cajainmaculada"><img src={social} alt="Social" className="r-sociales" /></a><br></br>
        <a href="https://www.instagram.com/cajainmaculada"><img src={facebook} alt="Facebook" className="r-sociales" /></a>
     </div>
     <div className="text-center">
      <img src={Prensa} className="prensa" alt=""></img>
     </div>
     </div>
      <Footer />
    </div>
  );
}

export default Conocenos;
