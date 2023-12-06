import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ImgSide from '../images/sidebar.png';
import BannerTriciklo from '../images/imgHeader.png';
import Fig1 from '../images/fig1.png';
import ModalVideo from 'react-modal-video';
import '../../node_modules/react-modal-video/scss/modal-video.scss';

const HeroBanner = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <Container className='section'>
            <Row>
                <div className="HeroBannerTriciklo">
                    <div className="image-container-left">
                        <img src={ImgSide} alt="Imagen 1" className="img-fluid" />
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="image-container-center">
                            <img src={BannerTriciklo} alt="Imagen 2" className="img-fluid" />
                            <ModalVideo
                                channel="youtube"
                                youtube={{ mute: 0, autoplay: 0 }}
                                isOpen={isOpen}
                                videoId="-P1dArmDR58?si=MTcyV5wOnR5SZwZf"
                                onClose={() => setOpen(false)} 
                            />
                            <div className="custom-button d-flex align-items-center text-center" onClick={() => setOpen(true)}>
                                VER REEL<span className='calypso'>.</span>
                            </div>
                        </div>
                    </div>
                    <div className='Image-container-right'>
                        <img src={Fig1} alt="Imagen 3" className="img-fluid" />
                    </div>
                </div>
            </Row>
        </Container>
    );
};

export default HeroBanner;