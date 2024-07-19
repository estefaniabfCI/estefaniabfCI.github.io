import React from 'react';
import Header from '../componets/header.js';

import Footer from '../componets/footer.js';
import NoticiaContent from '../componets/noticiaContent.js';


const Noticia = () => {
  return (
    <div>
       <Header />  
    <div className='container'>
     <NoticiaContent/>
    </div>
    <Footer />
    </div>
  );
}

export default Noticia;
