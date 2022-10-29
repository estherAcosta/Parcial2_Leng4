
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Pedidos from './compoentes/pedidos';
import Busqueda from './compoentes/busqueda';
import RealizaPedido from './compoentes/realizapedido';
import Localizacion from "./compoentes/localizacion";
function App() {
  
   return ( 
  <div className="App">
  <Pedidos/>
   <BrowserRouter>
   <Routes>
   <Route path="/solicitud " element={<RealizaPedido/>}/>
      <Route path="/Ubicando Vehiculo" element={<Busqueda/>}/>
      <Route path="/localizacion" element={<Localizacion/>}/>
        <Route path="/solicitud"/>
     </Routes>
    </BrowserRouter>
    </div>
   
 
  );
}

export default App;
