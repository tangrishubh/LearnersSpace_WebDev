import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import './navbar.css';

const Navbarz = ({ darkMode }) => {
  return (
    <Navbar className={`custom-navbar ${darkMode ? 'dark-mode' : 'light-mode'}`} expand="lg">
      <Container>
        <Navbar.Brand href="#home" className={darkMode ? 'text-white' : 'text-black'}>NOTES</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className={darkMode ? 'text-white' : 'text-black'}>Home</Nav.Link>
            <Nav.Link href="/about" className={darkMode ? 'text-white' : 'text-black'}>About</Nav.Link>
            <NavDropdown title="more" id="basic-nav-dropdown" className={darkMode ? 'text-white' : 'text-black'}>
              <NavDropdown.Item href="/new" className='text-black'>New Note</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className='text-black'>Something</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className='text-black'>Something2</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarz;
