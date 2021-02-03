import React from 'react';
import { Container, FormControl, Navbar, NavLink } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import logo from '../logo.png';
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import Home from "../pages/Home";
import About from "../pages/About";
import Production from "../pages/Production";
import Offers from "../pages/Offers";
import Contacts from "../pages/Contacts";

function Header() {
    return (
        <>
        <Navbar   collapseOnSelect expand="lg" bg="dark" variant="dark">
{/* <Container> */}
    <Navbar.Brand href="/">
        <img
       src={logo}
       
        className="d-inline-block align-top"
        alt="Метлайн"
        />
    </Navbar.Brand >
    {/* <Container>  */}
    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
    <Navbar.Collapse id="responsive-navbar-nav">
<Nav className="mr-auto">
    <Nav.Link as={Link} to="/">Главная</Nav.Link>
    <Nav.Link as={Link} to="/about">О компании</Nav.Link>
    <Nav.Link as={Link} to="/production">Продукция</Nav.Link>
    <Nav.Link as={Link} to="/offers">Пациентам</Nav.Link>
    <Nav.Link as={Link} to="/contacts">Где купить</Nav.Link>
</Nav>


 {/* <Form inline >
    <FormControl
    type="text"
    placeholder="Поиск"
    className="form-control mr-sm-2"
    />
<Button variant="outline-info">Искать</Button>
</Form>  */}
    </Navbar.Collapse>
    {/* </Container>  */}
{/* </Container> */}
        </Navbar>
        
     
        


        </>
     
    );
  }
  
  export default Header;