import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logoCi from '../assets/images/logo.png';
import '../styles/header.css'; // Importa tus estilos personalizados aquí


const Header = () => {
  return (
    <Navbar expand="lg" className=' text-center custom-navbar' variant="tertiary">
      <Navbar.Brand href="/">
        <img
          src={logoCi}
          alt=''
          width="110"
          height="80"
          className="responsive-img-header"
        style={{margin:20}}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"  style={{margin:10}}/>
      <Navbar.Collapse id="basic-navbar-nav text-center">
        <Nav className="mr-auto">
        <Nav.Link href="/somosci" className='fontLinkHeader'>Somos CI</Nav.Link>       
          <Nav.Link href="/noticias" className='fontLinkHeader'>Noticias</Nav.Link>
          <Nav.Link href="/revista" className='fontLinkHeader'>Revista digital</Nav.Link>
          <Nav.Link href="/proveedora" className='fontLinkHeader'>Proveedora inmaculada</Nav.Link>
          <Nav.Link href="/casos" className='fontLinkHeader'>Casos de éxito</Nav.Link>
          <Nav.Link href="/media" className='fontLinkHeader'>Media</Nav.Link>
          <Nav.Link href="/articulos" className='fontLinkHeader'>Articulos de opinion</Nav.Link>
          <Nav.Link href="/conocenos" className='fontLinkHeader'>Conócenos</Nav.Link>
          <Nav.Link href="/sucursales" className='fontLinkHeader'>Sucursales</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
