import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import '../styles/footer.css';

const Footer = () => {
  return (
    <div className="wrapper"  style={{marginTop:"80px"}}>
      <div className="main-content">
        {/* Aquí va tu contenido principal */}
      </div>
      <footer className="footer">
        <Container>
          <Row className="footer-info">
            <Col>
            <a href='#'><p className='tFooter'>Mapa del sitio</p></a>
            <a href='#'><p className='tFooter'>Contacto</p></a>
            </Col>
            <Col>
            <a href='#'><p className='tFooter'>Preguntas frecuentes</p></a>
            <a href='#'><p className='tFooter'>Links de interés</p></a>
            </Col>
            <Col>
            <a href='#'><p className='tFooter'>Aviso de privacidad</p></a>
            <a href='#'><p className='tFooter'>Términos y condiciones</p></a>
            </Col>
            <a href='#'><p style={{fontSize:"14px", fontWeight:"bold", margin:10}}>Caja Inmaculada, S.C. De A.P. De R.L. De C.V.</p></a>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
