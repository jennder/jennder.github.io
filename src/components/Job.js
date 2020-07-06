import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

class Job extends React.Component {
    duration() {
        return this.props.end !== undefined ? this.props.start + " — " + this.props.end : this.props.start;
    }

    descriptionOnly() {
        return this.props.place === undefined;
    }
    render() {
        return (
            <Container className={this.descriptionOnly() ? '' : 'job'}>
            <Row><Col className="table-title">{this.props.place}</Col><Col className="table-subtitle">{this.duration()}</Col></Row>
            <Row className={"table-subtitle"  + (this.descriptionOnly() ? ' no-job' : '')}><Col className="job-position">{this.props.position}</Col><Col> {this.props.tools}</Col></Row>
            </Container>
        );
    }
}

export default Job;