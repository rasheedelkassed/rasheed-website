import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { GitHub, Linkedin } from 'react-feather';

class SocialsNavbar extends Component {
    render() {
        return(
            <Navbar bg="light" expand="lg" fixed="bottom">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <Nav.Link href="#github"><GitHub></GitHub></Nav.Link>
                  <Nav.Link href="#linkedin"><Linkedin></Linkedin></Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          )

    }
  }

export default SocialsNavbar;