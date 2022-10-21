import {useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
// import background from "./img/taxi.png";
import Pedidos from './compoentes/pedidos';
import Localizacion from'./compoentes/localizacion';
function App() {
  // <div style={{ 
  //   backgroundImage: url=("https%3A%2F%2Fwww.freepng.es%2Fpng-xjfwk2%2F&psig=AOvVaw1U9zSwO9aQIefSrkwGv9Hd&ust=1666389847975000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCJjdo-Po7_oCFQAAAAAdAAAAABAD")
  // }}>
  //  PEDIDO
  // </div>
   const [localizacion, setLocalizacion] = useState([]);
   const traerDato = useEffect(() => {
  fetch( "https://https%3A%2F%2Fwww.freepng.es%2Fpng-xjfwk2%2F&psig=AOvVaw1U9zSwO9aQIefSrkwGv9Hd&ust=1666389847975000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCJjdo-Po7_oCFQAAAAAdAAAAABAD")
  .then((response) => response.json())
  .then((data) => {
        console.log(data.results)
          setLocalizacion(data.results)}
       );
   },[])
   return (
    <div className="App">
   <Pedidos/>
      <Routes>
        <Route path="/Solicitud Servicio" element={<Pedidos/>}>
          <Route path="/Solicitud"/> 
           <BrowserRouter> </BrowserRouter>
        </Route>
        <Localizacion/>
         <Routes/>
           <Route path="/Ubicando Vehiculo" element={<Localizacion/>}></Route>
             <Route path="/acerca"/>
               <BrowserRouter> </BrowserRouter>
        </Routes>
  
    </div>
  );
}

export default App;
