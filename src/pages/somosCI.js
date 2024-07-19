import React from 'react';
import Header from '../componets/header.js';
import '../styles/somosCI.css';
import Footer from '../componets/footer.js';
import MyCarousel from '../componets/carousel.js';


const somosCI = () => {
  return (
      <div>
          <MyCarousel/>
          <Header/>
          <div className='content'>

                  <div className="card-body">
                      <h2 class="card-title text-center text-capitalize mb-sm-10">¿Quiénes somos?</h2>
                      <p className="card-text text-center m-4">Somos una Sociedad cooperativa de ahorro y préstamo, que
                          ayuda a mejorar la calidad de vida de nuestros socios mediante la cultura del ahorro y
                          servicios financieros competitivos.</p>
                  </div>


                  <div className="card-body">
                      <h2 class="card-title text-center text-capitalize mb-sm-10">historia</h2>
                      <p className="card-text text-center m-4">
                          CAJA INMACULADA fue fundada el 31 de mayo de 1955 en la
                          ciudad de Querétaro, Qro. por 25 obreras, trabajadoras de una fábrica denominada “Fabricantes
                          en General” conocida como “La Mica”, para librarse de los intereses de usura que les cobraban
                          los agiotistas ante sus necesidades de obtener préstamos.
                          Caja Inmaculada se encuentra autorizada desde marzo de 2006, por la Comisión Nacional Bancaria y de Valores, bajo la figura
                          jurídica de Sociedad Cooperativa de Ahorro y Préstamo de Responsabilidad Limitada de Capital
                          Variable, en términos de la Ley de Ahorro y Crédito Popular. Anteriormente estaba autorizada
                          por la Secretaría de Hacienda y Crédito Público, bajo la figura jurídica de Sociedad de Ahorro
                          y Préstamo, en términos de la Ley General de Organizaciones y Actividades Auxiliares de
                          Crédito.</p>
                  </div>
              </div>


          <Footer/>
      </div>
  );
}

export default somosCI;
