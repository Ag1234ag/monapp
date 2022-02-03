import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { logout} from "../../JS/Actions/authActions";
import { useSelector, useDispatch } from "react-redux";
import { HiOutlineLogout } from "react-icons/hi";
import logo from '../../assets/logo.png'
import Filter from '../Filter/Filter.js';
import './Navbar.css'
import {Navbar , Container , Nav , NavDropdown } from 'react-bootstrap';
const Navbarr = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">
        <img
          alt="logo"
          src={logo}
          width="80"
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
              <Link to="/Homeadmin" className="lin">Home</Link>
              <NavDropdown title="Products Categories"  className="lin">
        <NavDropdown.Item href="/Smartphone" className="linn">Smartphone</NavDropdown.Item>
        <NavDropdown.Item href="/Tablettes"  className="linn">Tablettes</NavDropdown.Item>
        <NavDropdown.Item href="/Computers"  className="linn">Computers</NavDropdown.Item>
        <NavDropdown.Item href="/Printers"   className="linn">Printers</NavDropdown.Item>
      </NavDropdown>
              <Link to="/ContactUS" className="lin">ContactUS</Link>
              <Link to="/Order" className="lin">Orders</Link>
              <Link to="/cart" className="lin">Cart</Link>
              {isAuth ? (
          <button onClick={() => dispatch(logout())} className="icon" > <HiOutlineLogout style={{ color:"#fff" , fontSize: "1.5em"}} /> </button> 
          ) : (
            <div>
              <Link to="/CreateAccount" className="lin">Create Account</Link>
              <Link to="/login" className="lin">Login</Link>
              </div>
              )}
            </Nav>
            <Filter />
          </Navbar.Collapse>
          
          </Container>
      </Navbar>
     
    </div>
  );
};

export default Navbarr;
