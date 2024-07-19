import React from 'react';
import Header from '../componets/header.js';
import MyCarousel from '../componets/carousel.js';
import Footer from '../componets/footer.js';
import CardHome from '../componets/cardHome.js';
import logo from '../assets/images/logo.png';

const Home = () => {
  return (
    <div>
    <MyCarousel />
      <Header />
    <div className='container'>
      <div className="centered-container">
        <img src={logo} className="responsive-img" alt="Descripción de la imagen" />
      </div>
      <div className='text-center'>
        <CardHome />
          </div>
    </div>
    <Footer />
    </div>
  );
}

export default Home;
