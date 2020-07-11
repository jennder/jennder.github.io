import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AiOutlineMail } from 'react-icons/ai';

import Experience from '../components/Experience';
import ProjectTable from '../components/ProjectTable';
import SectionTitle from '../components/SectionTitle';
import Spacer from '../components/Spacer';
import '../styles/HomePage.css';

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
                <SectionTitle />
                <Spacer />
                <SectionTitle title="work experience" />
                <Experience />
                <Spacer />
                <SectionTitle title="past projects" />
                <Row>
                    <Col style={{ marginLeft: '-20px' }}>
                        <ProjectTable />
                    </Col>
                </Row>
                <SectionTitle title="contact" />
                <Spacer size="90" />
                <Row style={{ 'padding-top': '20px' }}>
                    <Col className="table-title" style={{ 'text-align': 'center' }}><a className="inline-link" href="mailto:der.je@northeastern.edu"><AiOutlineMail /></a> der.je at northeastern.edu</Col>
                </Row>
            </Container>
        )
    }
}

export default HomePage;