import React from 'react';
import '../styles/imagenCard.css';

// Array de datos de tarjetas
const cardData = [
    {
        id: 1,
        image: require('../assets/images/video.png'),
        title: 'Entrevista a socio',
   
    }, 
    {
        id: 2,
        image: require('../assets/images/video.png'),
        title: 'Entrevista a socio',
   
    },
    {
        id: 1,
        image: require('../assets/images/video.png'),
        title: 'Entrevista a socio',
   
    }, 
    {
        id: 2,
        image: require('../assets/images/video.png'),
        title: 'Entrevista a socio',
   
    },
  
    // Agrega más objetos aquí para más tarjetas
];

const VideoCard = () => {
    return (
        <div className="card-container"> 
            {cardData.map(card => (
                <div key={card.id} className="card text-center">
                    <img src={card.image} className="card-img-top" alt="imagevideo" />
                    <div className="card-body">
                        <h5 className="card-text">{card.title}</h5>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default VideoCard;
