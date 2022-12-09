import Img3 from "./image/servtaxi.png";
import React from "react";
import { Link } from "react-router-dom";
const Inicio = () => {
  return (
    <div class="inicio_div">
      <nav>
        <section>
          <span> 🚕👮🚕👮</span>
          <span>BIENVENIDOS A SERVITAXI</span>
          <span> 🚕👮🚕👮</span>
          <img src={Img3} alt="" className="item-img"></img>
          <h3>Realiza tu pedido de Servicio ¡YA! </h3>
          <ul></ul>
          <Link to="hacer_pedido">RealizaPedido</Link>
          <ul></ul>
          <Link to="ubicando_vehiculo">Busqueda</Link>
          <ul></ul>
          <Link to="localizacion">Locate</Link>
        </section>
      </nav>
      </div>
  );
}
export default Inicio