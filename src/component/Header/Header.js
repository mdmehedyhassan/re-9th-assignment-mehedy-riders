import React, { useContext } from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    const [riders] = useContext(UserContext)
    return (
        <Navbar bg="" expand="lg">
            <Container>
                <Navbar.Brand><Link className="login-nav" to="/">Mehedy Riders</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link className="login-nav" to="/home">Home</Link>
                        <Link className="login-nav" to="/destination">Destination</Link>
                        <Link className="login-nav" to="/blog">Blog</Link>
                        <Link className="login-nav" to="/contact">Contact</Link>
                        {
                            riders.email ? <Link to="/profile"><button className="btn btn-primary"><FontAwesomeIcon icon={faUserCircle} /></button></Link> :
                            <Link to="/login"><button className="btn btn-primary">Login</button></Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;