import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import ImgSide from '../images/sidebar.png';
import BannerTriciklo from '../images/imgHeader.png';
import Fig1 from '../images/fig1.png';
import LocalVideoModal from './LocalVideoModal';
import reelVideo from '../assets/videos/reel.mp4';
import '../../node_modules/react-modal-video/scss/modal-video.scss';

const HeroBanner = () => {
    const [isOpen, setOpen] = useState(true);
    const [isMuted, setIsMuted] = useState(true); // Empieza silenciado para poder reproducir automáticamente al entrar

    return (
        <div className='section container'>
            <Row>
                <div className="HeroBannerTriciklo">
                    <div className="image-container-left">
                        <img src={ImgSide} alt="Imagen 1" className="img-fluid" />
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="image-container-center video-responsive">
                            <img src={BannerTriciklo} alt="Imagen 2" className="img-fluid" />
                            <LocalVideoModal
                                videoSrc={reelVideo}
                                isOpen={isOpen}
                                onClose={() => {
                                    setOpen(false);
                                    setIsMuted(false); // Al cerrar el modal automático, cambiamos muted a false para que la próxima vez tenga sonido
                                }}
                                startTime={0}
                                muted={isMuted}
                            />
                            <div className="custom-button d-flex align-items-center text-center" onClick={() => {
                                setIsMuted(false); // Reproducir con sonido cuando el usuario hace clic manualmente
                                setOpen(true);
                            }}>
                                VER REEL<span className='calypso'>.</span>
                            </div>
                        </div>
                    </div>
                    <div className='image-container-right'>
                        <img src={Fig1} alt="Imagen 3" className="waves" />
                    </div>
                </div>
            </Row>
        </div>
    );
};

export default HeroBanner;