import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Mehedy Riders</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link className="login-nav" to="/home">Home</Link>
                        <Link className="login-nav" to="/destination">Destination</Link>
                        <Link className="login-nav" to="/blog">Blog</Link>
                        <Link className="login-nav" to="/contact">Contact</Link>
                        <Link to="/login"><button className="btn btn-danger">Login</button></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;