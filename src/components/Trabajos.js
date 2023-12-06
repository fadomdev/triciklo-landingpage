import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/img/entel empresas/9f584f49-fc5d-4a7b-9b5a-49b6360c1d18.jpg';
import vid1 from '../assets/img/entel empresas/ENTEL FERIA FOOD SERVICE DIA 1.mp4';
import img3 from '../images/event3.jpg';

function UncontrolledExample() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <Carousel style={{ width: '80%', height: '100%' }}>
                <Carousel.Item>
                    <img        
                        className="d-block w-100"
                        src={img1} 
                        alt="First slide"
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }} 
                    />
                    <Carousel.Caption>
                        <h3 className='banner2'>Entel Empresas</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <video        
                        className="d-block w-100"
                        src={vid1} 
                        alt="First slide"
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                        controls
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img        
                        className="d-block w-100"
                        src={img3} 
                        alt="First slide" 
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }} 
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default UncontrolledExample;