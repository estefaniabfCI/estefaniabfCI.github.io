import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Import Routes instead of Switch
import './App.css';
import Home from './pages/home';
import Revista from './pages/revistaDigital';
import ProveedoraInmaculada from './pages/proveedoraInmaculada';
import Sucursales from './pages/sucursales';

import Conocenos from './pages/conocenos';
import Noticias from './pages/noticias';
import CasosDeExito from './pages/casosDeExito';
import MediaWeb from './pages/media';
import ArticulosOpinion from './pages/articulosOpinion';
import SomosCI from './pages/somosCI';
import Noticia from './pages/noticia';
import Articulo from  './pages/articulo'



function App() {
  return (
    <Router>
      <div>
        
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/revista" element={<Revista />} />
          <Route exact path='/proveedora' element={<ProveedoraInmaculada/>}  />   
          <Route exact path='/sucursales' element={<Sucursales/>}  /> 
          <Route exact path='/conocenos' element={<Conocenos/>}  /> 
          <Route exact path='/casos' element={<CasosDeExito/>}  /> 
          <Route exact path='/noticias' element={<Noticias/>}  /> 
          <Route exact path='/noticia' element={<Noticia/>}  /> 
          <Route exact path='/media' element={<MediaWeb/>}  /> 
          <Route exact path='/articulos' element={<ArticulosOpinion/>}  /> 
          <Route exact path='/articulo' element={<Articulo/>}  /> 
          <Route exact path='/somosci' element={<SomosCI/>}  /> 
        </Routes>
     
      </div>
    </Router>
  );
}

export default App;
