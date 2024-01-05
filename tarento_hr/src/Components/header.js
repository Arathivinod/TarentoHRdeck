import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="px-4">
      <Navbar.Brand href="/" className="mr-4">Tarento_hr</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto p-2">
          <Nav.Link href="/add-details">Fill details</Nav.Link>
          <Nav.Link href="/login">View</Nav.Link>
        </Nav>
        <Nav className="ml-4">
          <Button variant="outline-primary" href="/login">
            Login
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
