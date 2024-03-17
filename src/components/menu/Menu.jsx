import React from 'react'
import { Navbar,Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
Link

const Menu = () => {
  return (
    <>
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to={'/'}>Home</Link>
            <Link to={'/Service'}>Service</Link>
            <Link to={'/Footer'}>Footer</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Menu