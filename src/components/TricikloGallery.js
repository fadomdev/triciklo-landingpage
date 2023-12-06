import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import imagenes from '../assets/img/jumbotronglmg';


const images = [];
for (const key in imagenes) {
  if (Object.hasOwnProperty.call(imagenes, key)) {
    const imgPath = imagenes[key];
    images.push({
      original: imgPath,
      thumbnail: imgPath, 
    });
  }
}
  class TricikloGallery extends React.Component {
    render() {
      return <ImageGallery items={images} />;
    }
  }

  export default TricikloGallery;