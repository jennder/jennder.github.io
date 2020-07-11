import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

class JobPosition extends React.Component {
    duration() {
        return this.props.end !== undefined ? this.props.start + " — " + this.props.end : this.props.start;
    }

    descriptionOnly() {
        return this.props.place === undefined;
    }
    render() {
        return (
            <Row className="table-subtitle"><Col className="job-position">{this.props.position}</Col><Col> {this.props.tools}</Col></Row>
        );
    }
}

export default JobPosition;