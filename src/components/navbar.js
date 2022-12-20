import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../logo.png';
import CartWidget from './CartWidget';
import { Link } from "react-router-dom";




function NavbarApp() {
  return (
    <Navbar  bg="light" variant="light" expand="lg">
        <Container className='menuNavegacion'>
            <div>
                <img class="logo" src={logo} />
            </div>
            <Navbar.Brand>
              <Link to="/" className="links text-black px-3 py-2 rounded-md text-sm font-medium" aria-current="page">
                La Casa Del Adorno
              </Link>
            </Navbar.Brand>
            
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link className='links'>
                      <Link to="/" className="links text-black px-3 py-2 rounded-md text-sm font-medium" aria-current="page">
                        Home
                      </Link>
                    </Nav.Link>
                    <Nav.Link className='links'>
                      Nosotros
                    </Nav.Link>
                    <NavDropdown className='links' title="Productos" id="basic-nav-dropdown">
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
            <div className='alineacionEnvios'>
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-truck-delivery" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <circle cx="7" cy="17" r="2" />
                <circle cx="17" cy="17" r="2" />
                <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
                <line x1="3" y1="9" x2="7" y2="9" />
              </svg>
              <p className='alineacionParrafo'>Envios gratis desde $2000</p>
            </div>
            <div>
                <CartWidget />
            </div>
        </Container>
    </Navbar>
  );
}

export default NavbarApp;