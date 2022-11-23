import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../logo.png';
import CartWidget from './CartWidget';
import { Link } from "react-router-dom";




function NavbarApp() {
  return (
    <Navbar bg="success" variant="dark" expand="lg">
        <Container>
            <div>
                <img class="logo" src={logo} />
            </div>
            <Navbar.Brand  href="#home">
              <Link to="/" className="links text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">
                La Casa Del Adorno
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">
                      <Link to="/" className="links text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">
                        Home
                      </Link>
                    </Nav.Link>
                    <Nav.Link href="#link">
                      Nosotros
                    </Nav.Link>
                    <NavDropdown title="Productos" id="basic-nav-dropdown">
                    <NavDropdown.Item className='links' href="#action/3.1">
                      <Link to="/category/macetas" className="links text-black px-3 py-2 rounded-md text-sm font-medium" aria-current="page">
                        Macetas
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item className='links' href="#action/3.2">
                      <Link to="/category/estatuas" className="links text-black px-3 py-2 rounded-md text-sm font-medium" aria-current="page">
                        Estatuas
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item className='links' href="#action/3.3">
                      <Link to="/category/baño de pajaros" className="links text-black px-3 py-2 rounded-md text-sm font-medium" aria-current="page">
                        Baño de Pajaros
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item className='links' href="#action/3.4">
                      <Link to="/category/fuentes" className="links text-black px-3 py-2 rounded-md text-sm font-medium" aria-current="page">
                        Fuentes
                      </Link>
                    </NavDropdown.Item>
                    
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