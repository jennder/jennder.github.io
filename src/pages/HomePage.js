import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../styles/HomePage.css'

class HomePage extends React.Component {
    render() {
        return (
            <Container className="page" fluid>
                <Row>
                    <Col className="name">
                        helllo
                    </Col>
                </Row>
            </Container>


        )
    }
}

export default HomePage;