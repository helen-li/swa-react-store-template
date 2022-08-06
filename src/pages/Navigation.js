import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const Navigation = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">The Right Note</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Buy" id="basic-nav-dropdown">
              <NavDropdown.Item href="/store">Full Collection</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/beginner">
                Beginner Collection
              </NavDropdown.Item>
              <NavDropdown.Item href="/intermediate">
                Intermediate Collection
              </NavDropdown.Item>
              <NavDropdown.Item href="/advanced">
                Advanced Collection
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
