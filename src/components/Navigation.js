import React from 'react';

import { Nav, Navbar } from 'react-bootstrap';

class Navigation extends React.Component {
    render() {
        return (
            <Navbar fixed="top" >
                <Navbar.Brand href="/"><span className="nav-title">Jenn Der</span></Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Item>
                        <Nav.Link href="/about"> about </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/portfolio">portfolio</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/contact">contact</Nav.Link>
                    </Nav.Item>

                </Nav>
            </Navbar>
        );
    }
}

export default Navigation;