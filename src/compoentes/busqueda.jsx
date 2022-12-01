import React from "react";
import ImageGallery from 'react-image-gallery';
import { Link } from "react-router-dom";
  const Busqueda=() => {
    return(
    <div>
      <Link to="Buscando">Busqueda</Link>
      </div>
   )
   const images = [
    {
      original: 'https://github.com/estherAcosta/Parcial2_Leng4.git/img/taxi',
      thumbnail: 'https://github.com/estherAcosta/Parcial2_Leng4.git/img/',
    },
    {
      original: 'https://github.com/estherAcosta/Parcial2_Leng4.git/img/taxi1',
      thumbnail: 'https://github.com/estherAcosta/Parcial2_Leng4.git/img/',
    },
  
  ];
  
  class MyGallery extends React.Component {
    render() {
      return <ImageGallery items={images} />;
    }
  }
};
export default Busqueda