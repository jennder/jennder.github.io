import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import Experience from '../components/Experience'
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
                        <Table borderless>
                            <tbody>
                                <tr>
                                    <td className="table-title"><a className="inline-link" href="https://feliciazhang.github.io/sage/">sage</a>
                                        <div className="table-subtitle"><p></p>class assignment, fall 2019</div>
                                    </td>
                                    <td className="table-description"><div className="project-description">
                                        sage is a semester long group for a human and computer interaction class; it is a meal planning application built in react, and the culmination of several iterations of paper prototyping, user experience testing, and heuristic testing
                                    </div></td>
                                </tr>
                                <tr>
                                    <td className="table-title"><a className="inline-link" href="https://drive.google.com/file/d/1YOKlkra_IAHn_bRTP4ZIBJdWxQIrsIib/view?usp=sharing">data-driven traffic forecasting</a>
                                        <div className="table-subtitle"><p></p>northeastern university, fall 2019</div>
                                    </td>
                                    <td className="table-description"><div className="project-description">
                                        research project extension based on Northeastern faculty paper: <a className="inline-link" href="https://arxiv.org/abs/1707.01926"><i>Diffusion Convolutional Recurrent Neural Network: Data-Driven Traffic Forecasting</i></a>, advised by Rose Yu
                                        <p></p>
                                        spatiotemporal forecasting machine learning research that studied the effects of weather and climate on traffic prediction
                                        <p></p>
                                        😀📣<a className="inline-link" href="https://docs.google.com/presentation/d/1ZpwxcewWfHYxDzbKyllAMCYWFnZbjoggV0cZ7hfeYCs/edit?usp=sharing">presentation slides</a>🚗🗺️
                                    </div></td>
                                </tr>
                                <tr>
                                    <td className="table-title"><a className="inline-link" href="https://devpost.com/software/luxo-jr-8tq64c">luxo</a>
                                        <div className="table-subtitle"><p></p>mit hacking arts, fall 2018</div>
                                    </td>
                                    <td className="table-description"><div className="project-description">
                                        like the excitable and bashful Pixar lamp, Luxo Jr, this project is an immersive virtual reality experience taking place in our living room filled with interactive and animated furniture with individual personalities
                                        <p></p>
                                        <a className="inline-link" href="https://www.wayfair.com/">Wayfair</a> Brand Challenge Winner; Fan Favorite
                                        </div></td>
                                </tr>
                                <tr>
                                    <td className="table-title"><a className="inline-link" href="https://drive.google.com/file/d/1v-tDOliZIrg5Mp9VyxlQUjibyKZdso9g/view?usp=sharing">personal essay</a>
                                        <div className="table-subtitle"><p></p>class assignment, fall 2018</div>
                                    </td>
                                    <td className="table-description"><div className="project-description">
                                        assignment for the intro video class to practice using classroom materials: adobe premiere pro + after effects, lumix gh4, rode mic, zoom audio recorder
                                        </div></td>
                                </tr>
                                <tr>
                                    <td className="table-title"><a className="inline-link" href="https://drive.google.com/file/d/1HCNLcTR1nmCwlBBRWMrp5yAEZbZyaBh4/view?usp=sharing">"sum"</a>
                                        <div className="table-subtitle"><p></p>class assignment, fall 2017</div>
                                    </td>
                                    <td className="table-description"><div className="project-description">
                                        assignment for the 4d: sequence and  drawing class visual response to <a className="inline-link" href="https://www.nytimes.com/2009/06/14/books/excerpt-sum.html"><i>Sum</i></a> by David Eagleman; the goal was to 1. categorize stock footage gathered by the class based on color and movement, 2. draw parallels to Eagleman's essay, and 3. create a visual essay using only native video and sound
                                    </div></td>
                                </tr>
                                <tr>
                                    <td className="table-title"><a className="inline-link" href="https://devpost.com/software/motion-sculpting">motion sculpting</a>
                                        <div className="table-subtitle"><p></p>mit hacking arts, fall 2017</div>
                                    </td>
                                    <td className="table-description"><div className="project-description">
                                        inspired by the theme "why human?", we explored how and why humans are so crucial to development of both art and technology in the age of artificial intelligence
                                        <p></p>
                                        <a className="inline-link" href="https://www.noitom.com/">NOITOM</a> Brand Challenge Winner
                                    </div></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                

            </Container>


        )
    }
}

export default HomePage;