import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import Experience from '../components/Experience'
import ProjectTable from '../components/ProjectTable'
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
                <Row className="section-title">
                    <Col>
                    </Col>
                </Row>
                <Row>
                    <Col />
                    <Col className="verticle-line" />
                </Row>
                <Row className="section-title">
                    <Col>
                        work experience
                    </Col>
                </Row>
                <Experience></Experience>
                <Row>
                    <Col />
                    <Col className="verticle-line" />
                </Row>
                <Row className="section-title">
                    <Col>
                        past projects
                    </Col>
                </Row>
                <Row>
                    <Col style={{ marginLeft: '-20px' }}>
                        <ProjectTable />
                    </Col>
                </Row>

            </Container>


        )
    }
}

export default HomePage;