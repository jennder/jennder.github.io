import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

class NotFound extends React.Component{
    render(){
        return (
            <Container className="page" fluid>
                <Row className="intro">
                    <Col className="center">
                        🙈<br />
                        uh oh! there's nothing here
                        <p><Link className="inline-link" to="/">return to home</Link>  →</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default NotFound;