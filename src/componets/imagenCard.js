import React from 'react';
import '../styles/imagenCard.css';

// Array de datos de tarjetas
const cardData = [
    {
        id: 1,
        image: require('../assets/images/Ahorro.png'),
        title: 'Articulo',
   
    }, 
    {
        id: 2,
        image: require('../assets/images/Ahorro.png'),
        title: 'Articulo',
   
    },
    {
        id: 3,
        image: require('../assets/images/Ahorro.png'),
        title: 'Articulo',
   
    }
    // Agrega más objetos aquí para más tarjetas
];

const ImagenCard = () => {
    return (
        <div className="card-container"> 
            {cardData.map(card => (
                <div key={card.id} className="card text-center">
                    <img src={card.image} className="card-img-top" alt="imagencard" />
                    <div className="card-body">
                        <a href="/articulo" className="card-title">{card.title}</a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ImagenCard;
