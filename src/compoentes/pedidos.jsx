import { Link } from "react-router-dom";
import React, { Fragment,useState }from "react";
const Pedidos = () => {

    return 
    <Fragment>
    <div>Has tu reserva del Servico</div>
    <form className="row">
        <div className="col-md-3">
        <input>
        placeholder="Ingrese Direccion de Origen"
        className="form-control"
        </input>
        </div>
        <div className="col-md-3">
        <input>
        placeholder="Ingrese Direccion de Destino"
        className="form-control"
        </input>
        </div>
        <div className="col-md-3">
        <input>
       <button>Cargar</button>
        </input>
        </div>
      </form>
      </Fragment>
    
  };
  export default Pedidos