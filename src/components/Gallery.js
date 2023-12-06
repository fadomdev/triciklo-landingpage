import React, { useState } from 'react';
import images from '../assets/img/jumbotronglmg'

    const Gallery = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
    };

    

    const galleryItems = [
        { filter: 'feria', src: images.img1, alt: 'entel' },
        { filter: 'feria', src: images.img2, alt: 'entel' },
        { filter: 'feria', src: images.img3, alt: 'entel' },
        { filter: 'feria', src: images.img4, alt: 'entel' },
        { filter: 'evento', src: images.img5, alt: 'servipag' },
        { filter: 'evento', src: images.img6, alt: 'servipag' },
        { filter: 'evento', src: images.img7, alt: 'servipag' },
        { filter: 'evento', src: images.img8, alt: 'servipag' },
        { filter: 'evento', src: images.img9, alt: 'servipag' },
        { filter: 'evento', src: images.img11, alt: 'airliquide' },
        { filter: 'evento', src: images.img12, alt: 'airliquide' },
        { filter: 'evento', src: images.img13, alt: 'airliquide' },
        { filter: 'evento', src: images.img14, alt: 'airliquide' },
        { filter: 'campana', src: images.img15, alt: 'aldeas' },
        { filter: 'campana', src: images.img16, alt: 'cerveza' },
        { filter: 'campana', src: images.img17, alt: 'cerveza' },
        { filter: 'feria', src: images.img18, alt: 'ecoterra' },
        { filter: 'feria', src: images.img19, alt: 'ecoterra' },
        { filter: 'campana', src: images.img20, alt: 'fini' },
        { filter: 'campana', src: images.img21, alt: 'fini' },
        { filter: 'campana', src: images.img22, alt: 'campana' },
        { filter: 'campana', src: images.img23, alt: 'campana' },
        { filter: 'campana', src: images.img24, alt: 'campana' },
        { filter: 'campana', src: images.img25, alt: 'yapo' },
        { filter: 'campana', src: images.img26, alt: 'yapo' },
        { filter: 'campana', src: images.img27, alt: 'yapo' },


    ];

    return (
        <section className="gallery">
        <div className="container">
            <div className="row">
            <div className="gallery-filter">
                <span
                className={`filter-item ${activeFilter === 'all' ? 'active' : ''}`}
                onClick={() => handleFilterClick('all')}
                data-filter="all"
                >
                Todo
                </span>
                <span
                className={`filter-item ${activeFilter === 'feria' ? 'active' : ''}`}
                onClick={() => handleFilterClick('feria')}
                data-filter="feria"
                >
                Ferias
                </span>
                <span
                className={`filter-item ${activeFilter === 'evento' ? 'active' : ''}`}
                onClick={() => handleFilterClick('evento')}
                data-filter="evento"
                >
                Eventos
                </span>
                <span
                className={`filter-item ${activeFilter === 'campana' ? 'active' : ''}`}
                onClick={() => handleFilterClick('campana')}
                data-filter="campana"
                >
                Campañas
                </span>
            </div>
            </div>
            <div className="row">
            {galleryItems.map((item, index) => (
                <div
                key={index}
                className={`gallery-item ${item.filter !== activeFilter && activeFilter !== 'all' ? 'hide' : 'show'}`}
                >
                <div className="gallery-item-inner">
                    <img src={item.src} alt={item.alt} />
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
};

export default Gallery;