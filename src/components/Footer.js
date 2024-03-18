import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import imgFooter from '../images/imgFooter.png';
import logoFooter from '../images/logoFooter.png';

const Footer = () => {
    return (
        
        <footer>
        <Container fluid className="section" id="contacto">
            <Row>
            <Col xs={12} sm={6} md={3} className="contImg">
                <img
                src={imgFooter}
                alt=""
                className="imgFooter"
                />
            </Col>
            <Col xs={12} sm={6} md={3} className="contacto direccion" >
                <ul>
                    <li><img src={logoFooter} alt= "logo Footer"></img></li>
                    <li >
                    <a href="mailto:contacto@triciklo.cl?subject=Necesito%20una%20cotización" className="contacto-triciklo" >contacto@triciklo.cl</a>
                    </li>
                    <li className="slogan-triciklo">pedaleemos<span className="calypso">juntos</span></li>
                </ul>
            </Col>
            <Col xs={12} sm={6} md={3} className="contRrss direccion">
                <ul>
                    <a href="https://www.linkedin.com/company/equipo-triciklo"><li className="margen-calypso rrssFooter">linkedin</li></a>
                    <a href="https://www.instagram.com/triciklo/"><li className="margen-calypso rrssFooter">instagram</li></a>
                    <a href="https://web.facebook.com/triciklo"><li className="margen-calypso rrssFooter">facebook</li></a>
                    <a href="https://www.youtube.com/@EquipoTriciklo/featured"><li className="margen-calypso rrssFooter">youtube</li></a>
                </ul>
            </Col>
            <Col xs={12} sm={6} md={3} className="direccion">
                <p>Antillas 954, Las Condes,<br></br> Santiago de Chile</p>
            </Col>
            </Row>
        </Container>
        </footer>
        
    );
};

export default Footer;