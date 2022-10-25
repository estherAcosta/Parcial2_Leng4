import {useEffect, useState} from 'react';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Pedidos from './compoentes/pedidos';
import Busqueda from './compoentes/busqueda';
import Realiza_Pedido from './compoentes/realiza_pedido';
function App() {
  const [localizacion,setLocalizacion]=useState ([]);
const traerpokemones=useEffect(() =>{fetch("C:/Users/marcela/Desktop/LENGUAJE4/parcial2/src/img/taxi.png").them((response)=>response.json()).then(data=>setLocalizacion(data.results))})


  function traerLocalizacion(){
   console.log(localizacion)
 }

  // const [localizacion,setLocalizacion]=useState ([]);
  // const traerLocalizacion = useEffect(() => {
  //   fetch( "C:/Users/marcela/Desktop/LENGUAJE4/parcial2/src/img/taxi.png")
  //      .then((response) => response.json())
  //      .then((data) => {
  //        console.log(data.results)
  //        setLocalizacion(data.results)}
  //      );
  //  },[])
  
   return (
    <div className="App">
   <Pedidos/>
      <Routes>
        <Route path="/Solicitud Servicio" element={<Realiza_Pedido/>}>
          <Route path="/solicitud"/> 
           <BrowserRouter> </BrowserRouter>
        </Route>
         <Routes/>
           <Route path="/Ubicando Vehiculo" element={<Busqueda/>}></Route>
             <Route path="/solicitud"/>
               <BrowserRouter> </BrowserRouter>
        </Routes>
  
    </div>
  );
}

export default App;
