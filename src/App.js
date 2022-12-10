
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Inicio from './principal/inicio';
import Pedidos from './compoentes/pedidos';
import Busqueda from './compoentes/busqueda';
import RealizaPedido from './compoentes/realizapedido';
import Locate from "./compoentes/locate";
function App() {
  
   return ( 
  <div className="App">
   <BrowserRouter>
   <Inicio />
   <Routes>
      <Route path="/ubicando_vehiculo" element={<Busqueda/>}/>
      <Route path="/realiza_pago" element={<Pedidos/>}/>
      <Route path="/localizacion" element={<Locate/>}/>
      <Route path="/hacer_pedido " element={<RealizaPedido/>}/>
        <Route path="/solicitud"/>
     </Routes>
    </BrowserRouter>
    </div>
   
 
  );

}

export default App;
