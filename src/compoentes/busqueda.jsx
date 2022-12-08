import Img1 from "./img/taxi.png";
import Img2 from "./img/taxi1.png";
import React from "react";
import { Link } from "react-router-dom";

  const Busqueda=() => {
    return(
    <div>
      <Link to="Buscando">hacer_pedido</Link>
      <img src={Img1} alt="" className="item-img"></img>
      <h3>Taxi con Baul amplio</h3>
      <img src={Img2} alt="" className="item-img"></img>
      <h3>Taxi sin Baul amplio</h3>
      </div>
      
     
   );
}
export default Busqueda