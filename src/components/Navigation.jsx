import React from "react";
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar className="navbar-dark" fixed="top">
    <Navbar.Brand href="#hero">James Valdez</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        <Nav.Link href="#hero">Cinematographer</Nav.Link>
        {/* <Nav.Link href="#home">Screenwriter</Nav.Link> */}
        </Nav>
    </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
