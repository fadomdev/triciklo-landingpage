import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const Nosotros = () => {
    return (
        <div className='background-nosotros section'>
        <Container id="nosotros">
            <Row className="justify-content-center">
            <Col xs={12} className="text-center">
                <h2 className='titulo-seccion'><span className='margin-text'>no</span>sotros<span className='calypso'>.</span></h2>
                <p className='description-about'>Con más de 15 años en el mercado, nos apasiona conectar marcas con personas a través de experiencias y contenidos únicos. 
                Creemos en la creatividad y la innovación como motores para generar conexiones auténticas y duraderas.
                </p>

            </Col>
            </Row>
        </Container>
        </div>
    );
}

export default Nosotros;