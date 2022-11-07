import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../logo.png';
import CartWidget from './CartWidget';




function NavbarApp() {
  return (
    <Navbar bg="success" variant="dark" expand="lg">
        <Container>
            <div>
                <img class="logo" src={logo} />
            </div>
            <Navbar.Brand  href="#home">La Casa Del Adorno</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Nosotros</Nav.Link>
                    <NavDropdown title="Productos" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Macetas</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Estatuas</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Baño de Pajaros</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Fuentes</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Pedestales y Bancos</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Angelitos y Miniaturas</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Plaquetas</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            <div>
                <CartWidget />
            </div>
        </Container>
    </Navbar>
  );
}

export default NavbarApp;