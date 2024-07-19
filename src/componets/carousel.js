// src/components/Carousel.js

import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../styles/carousel.css'; // Importa tus estilos personalizados aquí si es necesario
import slide1 from '../assets/images/fondoperiodico.jpg'; // Importa las imágenes del carrusel
import slide2 from '../assets/images/fondoperiodico.jpg';
import slide3 from '../assets/images/fondoperiodico.jpg';

const MyCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
