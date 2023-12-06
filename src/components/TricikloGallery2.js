import React from 'react';
import Gallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'; // Importa los estilos CSS de la galería
import ImgVid from '../assets/carousell/4v.jpg'

import imagesAndVideo from '../assets/img/jumbotronglmg';

const GalleryComponent = () => {
    const items = Object.keys(imagesAndVideo).map((key) => {
      if (key === 'vid1') {
        // Para el video
        return {
          original: imagesAndVideo[key],
          thumbnail: ImgVid, // Usar el mismo video como miniatura
          renderItem: () => {
            return (
              <video controls width="100%" >
                <source src={imagesAndVideo[key]} type="video/mp4" />
                Tu navegador no admite la etiqueta de video.
              </video>
            );
          },
        };
      } else {
        // Para las imágenes
        return {
          original: imagesAndVideo[key],
          thumbnail: imagesAndVideo[key], // Usar la misma imagen como miniatura
        };
      }
    });
  
    return (
      <div>
        <Gallery items={items} showPlayButton={false} />
      </div>
    );
  };
  
  export default GalleryComponent;