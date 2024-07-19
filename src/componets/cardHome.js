import React from 'react';


// Array de datos de tarjetas
const cardData = [
    {
        id: 1,
        image: require('../assets/images/folletoCoche.jpg'), // Ejemplo con require para importar la imagen
        title: 'CREDITO PARA TU COCHE',
        text: 'Descripción de la tarjeta 1',
        link: 'https://ejemplo.com/tarjeta1',
    },
    {
        id: 2,
        image: require('../assets/images/fondoperiodico.jpg'),
        title: 'Título de otra tarjeta',
        text: 'Descripción de la tarjeta 2',
        link: 'https://ejemplo.com/tarjeta2',
    },

    {
        id: 2,
        image: require('../assets/images/Ahorro.png'),
        title: 'Título de otra tarjeta',
        text: 'Descripción de la tarjeta 2',
        link: 'https://ejemplo.com/tarjeta2',
    },
    {
        id: 2,
        image: require('../assets/images/Prestamo.jpg'),
        title: 'Título de otra tarjeta',
        text: 'Descripción de la tarjeta 2',
        link: 'https://ejemplo.com/tarjeta2',
    },
  
    // Agrega más objetos aquí para más tarjetas
];

const CardHome = () =>{
    return (
        <div class="row justify-content-center">
       {cardData.map(card => (
    <div class="card text-center" style={{width: "18rem"}}>
  <img src={card.image} className="card-img-top" alt="cardhome"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/noticia" class="btn btn-info center">Go somewhere</a>
  </div>
</div>
 ))}
  </div>

);
}

export default CardHome;
