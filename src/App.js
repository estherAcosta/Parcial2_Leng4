// import ImageGallery from 'react-image-gallery';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';


import Pedidos from './compoentes/pedidos';
import Busqueda from './compoentes/busqueda';
import RealizaPedido from './compoentes/realizapedido';
import Locate from "./compoentes/locate";
function App() {
  
   return ( 
  <div className="App">
   <BrowserRouter>
   <Routes>
   <Route path="/solicitud " element={<RealizaPedido/>}/>
      <Route path="/ubicando_vehiculo" element={<Busqueda/>}/>
      <Route path="/hacer_pedido" element={<Pedidos/>}/>
      <Route path="/localizacion" element={<Locate/>}/>
        <Route path="/solicitud"/>
     </Routes>
    </BrowserRouter>
    </div>
   
 
  );

}

export default App;
