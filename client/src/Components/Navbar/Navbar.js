import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleFalse } from "../../JS/Actions/Actions";
import logo from '../../assets/logo.png'
import './Navbar.css'
import {Navbar , Container , Nav , NavDropdown } from 'react-bootstrap';
const Navbarr = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">
        <img
          alt="logo"
          src={logo}
          width="80"
          height="80"
          className="d-inline-block align-top"
        />
        </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Link to="/" className="lin" >Home</Link>
              <NavDropdown title="Products Categories"  className="link">
        <NavDropdown.Item href="#action/3.1">Info</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Phone</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Acc</NavDropdown.Item>
      </NavDropdown>
              <Link to="/ContactUS" className="lin">ContactUS</Link>
              <Link to="/CreateAccount" className="lin">Create Account</Link>
              <Link to="/login" className="lin">Login</Link>
          
            </Nav>
      
          </Navbar.Collapse>
        </Container>
      </Navbar>
     
    </div>
  );
};

export default Navbarr;
