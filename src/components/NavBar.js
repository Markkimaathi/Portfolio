import React from "react";
import Container from "react-bootstrap/Container";
import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Email } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";
import { GitHub } from "@mui/icons-material";
import "../styles/NavBar.css"

class NavBar extends React.Component {
  render() {
    return (
      <Navbar fixed="top" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">Mark Kimathi</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#intro">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link href="mailto:markangelkimathi@gmail.com">
                <Email style={{ fontSize: 20 }}></Email>
              </Nav.Link>
              <Nav.Link href="https://github.com/Markkimaathi/" target="_blank">
                <GitHub style={{ fontSize: 19 }}></GitHub>
              </Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/mark-kimathi-58257b305/" target="_blank">
                <LinkedIn style={{ fontSize: 21 }}></LinkedIn>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;