import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logoHeader.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';


function BarraNavegacion() {
    return (
    <div className='container'>
            <Navbar expand="lg" className='mt-5 mb-5'>
        <Container fluid>
        <Navbar.Brand href="#" className="logoHeader">
            <img src={logo} alt='logo'></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '250px' }}
                navbarScroll
                >
                <Nav.Link href="#" className="menuHeader">Home<span className='calypso'>.</span></Nav.Link>
                <Nav.Link href="#quehacemos" className="menuHeader" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Qué Hacemos<span className='calypso'>.</span></Nav.Link>
                <Nav.Link href="#nosotros" className="menuHeader">Nosotros<span className='calypso'>.</span></Nav.Link>
                <Nav.Link href="#clientes" className="menuHeader">Clientes<span className='calypso'>.</span></Nav.Link>
                <Nav.Link href="#contacto" className="menuHeader">Contáctanos<span className='calypso'>.</span></Nav.Link>
                </Nav>
                <div className="d-flex float-right">
                <Nav.Link href="https://www.linkedin.com/company/equipo-triciklo"><FontAwesomeIcon icon={faLinkedin} className="rrssHeader" /></Nav.Link>
                <Nav.Link href="https://www.instagram.com/triciklo/"><FontAwesomeIcon icon={faInstagram} className="rrssHeader"  /></Nav.Link>
                <Nav.Link href="https://web.facebook.com/triciklo"><FontAwesomeIcon icon={faFacebook} className="rrssHeader" /></Nav.Link>
                <Nav.Link href="https://www.youtube.com/@EquipoTriciklo/featured"><FontAwesomeIcon icon={faYoutube} className="rrssHeader" /></Nav.Link>
            </div>
            </Navbar.Collapse>
        </Container>
    </Navbar>


    </div>
    );
}

export default BarraNavegacion;