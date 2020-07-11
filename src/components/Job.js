import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import JobPosition from './JobPosition'

class Job extends React.Component {
    duration() {
        return this.props.end !== undefined ? this.props.start + " — " + this.props.end : this.props.start;
    }

    render() {
        return (
            <Container>
                <Row><Col className="table-title">{this.props.place}</Col><Col className="table-subtitle">{this.duration()}</Col></Row>
                <Container className="job-positions-container">
                    {this.props.positions.map(item => (
                        <div key={item.position}>
                            <JobPosition position={item.position} tools={item.tools} />
                        </div>
                    ))}
                </Container>
            </Container>
        );
    }
}

export default Job;