import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../styles/HomePage.css'

class HomePage extends React.Component {
    render() {
        return (
            <Container className="page" fluid>
                <Row className="intro">
                    <Col>
                        <i>hola</i>, i'm jenn! <i>currently</i>, i am a student at <span className="underline">northeastern university</span> in boston, massachusetts studying <span className="underline">computer science and media art</span>.
                        <i> previously</i>, i have worked as a <span className="underline">developer</span> in san francisco, california and the greater boston area.
                    </Col>
                </Row>
                <Row>
                <Col />
                <Col className="verticle-line" />
                </Row>
            </Container>


        )
    }
}

export default HomePage;