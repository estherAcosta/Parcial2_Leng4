import Img3 from "./image/servtaxi.png";
import React from "react";
import { Link } from "react-router-dom";
const Inicio = () => {
  return (
    <div className="inicio_div">
      <nav>
        <section>
          <span> ๐๐ฎ๐๐ฎ</span>
          <span>BIENVENIDOS A SERVITAXI</span>
          <span> ๐๐ฎ๐๐ฎ</span>
          <ul></ul>
          <img src={Img3} alt="" className="item-img"></img>
          <h3>Realiza tu pedido de Servicio ยกYA! </h3>
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