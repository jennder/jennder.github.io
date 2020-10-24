import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';


class Navigation extends React.Component {
    render() {
        return (
            <Navbar fixed="top" >
                <Navbar.Brand href="/"><span className="nav-title">Jenn Der</span></Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Item>
                        <Link to="/about" className="inline-link nav-spacer">about</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/portfolio" className="inline-link nav-spacer">portfolio</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/contact" className="inline-link nav-spacer">contact</Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        );
    }
}

export default Navigation;