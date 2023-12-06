import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import '../styles/styles.css';
import turbus from '../images/logo1.jpg';
import thc from '../images/logo2.jpg';
import anfp from '../images/logo3.jpg';
import huawei from '../images/logo4.jpg';
import mega from '../images/logo5.jpg';
import tvn from '../images/logo6.jpg';

import abcdin from '../images/logo7.jpg';
import agand from '../images/logo8.jpg';
import aiep from '../images/logo9.jpg';
import aperol from '../images/logo10.jpg';
import apology from '../images/logo11.jpg';
import bf from '../images/logo12.jpg';
import cacha from '../images/logo13.jpg';
import entel from '../images/logo14.jpg';
import komatsu from '../images/logo15.jpg';
import lg from '../images/logo16.jpg';
import lipton from '../images/logo17.jpg';
import masisa from '../images/logo18.jpg';
import gob from '../images/logo19.jpg';
import nike from '../images/logo20.jpg';
import oralb from '../images/logo21.jpg';
import pantene from '../images/logo22.jpg';
import pyg from '../images/logo23.jpg';
import prisa from '../images/logo24.jpg';
import roter from '../images/logo25.jpg';



export default function App() {
    return (
        <>
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
            }}
            pagination={false}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper section"
        >
            <SwiperSlide style={{ width: '150px', height: '100px' }}>
            <img src={turbus} alt="turbus" />
            </SwiperSlide>
            <SwiperSlide style={{ width: '150px', height: '100px' }}>
            <img src={thc} alt="thc" />
            </SwiperSlide>
            <SwiperSlide style={{ width: '150px', height: '100px' }}>
            <img src={anfp} alt="anfp" />
            </SwiperSlide>
            <SwiperSlide style={{ width: '150px', height: '100px' }}>
            <img src={huawei} alt="huawei" />
            </SwiperSlide>
            <SwiperSlide style={{ width: '150px', height: '100px' }}>
            <img src={mega} alt="mega" />
            </SwiperSlide>
            <SwiperSlide style={{ width: '150px', height: '100px' }}>
            <img src={tvn} alt="tvn" />
            </SwiperSlide>
            <SwiperSlide style={{ width: '150px', height: '100px' }}>
            <img src={abcdin} alt="abcdin" />
            </SwiperSlide>
            <SwiperSlide style={{ width: '150px', height: '100px' }}>
            <img src={agand} alt="agand" />
            </SwiperSlide>
            <SwiperSlide style={{ width: '150px', height: '100px' }}>
            <img src={aiep} alt="aiep" />
            </SwiperSlide>
            <SwiperSlide style={{ width: '150px', height: '100px' }}>
            <img src={aperol} alt="aperol" />
            </SwiperSlide>
            <SwiperSlide style={{ width: '150px', height: '100px' }}>
            <img src={apology} alt="apology" />
            </SwiperSlide>
            <SwiperSlide style={{ width: '150px', height: '100px' }}>
            <img src={bf} alt="banco falabella" />
            </SwiperSlide>
            <SwiperSlide style={{ width: '150px', height: '100px' }}>
            <img src={cacha} alt="cachantun" />
            </SwiperSlide>
            <SwiperSlide style={{ width: '150px', height: '100px' }}>
            <img src={entel} alt="entel" />
            </SwiperSlide>
            <SwiperSlide style={{ width: '150px', height: '100px' }}>
            <img src={komatsu} alt="komatsu" />
            </SwiperSlide>
            <SwiperSlide style={{ width: '150px', height: '100px' }}>
            <img src={lg} alt="lg" />
            </SwiperSlide>
            <SwiperSlide style={{ width: '150px', height: '100px' }}>
            <img src={lipton} alt="lipton" />
            </SwiperSlide>
            <SwiperSlide style={{ width: '150px', height: '100px' }}>
            <img src={masisa} alt="masisa" />
            </SwiperSlide>
            <SwiperSlide style={{ width: '150px', height: '100px' }}>
            <img src={gob} alt="gob" />
            </SwiperSlide>
            <SwiperSlide style={{ width: '150px', height: '100px' }}>
            <img src={nike} alt="nike" />
            </SwiperSlide>
            <SwiperSlide style={{ width: '150px', height: '100px' }}>
            <img src={oralb} alt="oralb" />
            </SwiperSlide>
            <SwiperSlide style={{ width: '150px', height: '100px' }}>
            <img src={pantene} alt="pantene" />
            </SwiperSlide>
            <SwiperSlide style={{ width: '150px', height: '100px' }}>
            <img src={pyg} alt="pyg" />
            </SwiperSlide>
            <SwiperSlide style={{ width: '150px', height: '100px' }}>
            <img src={prisa} alt="prisa" />
            </SwiperSlide>
            <SwiperSlide style={{ width: '150px', height: '100px' }}>
            <img src={roter} alt="roter" />
            </SwiperSlide>
        </Swiper>
        </>
    );
}