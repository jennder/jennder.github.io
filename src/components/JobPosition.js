import React from 'react';

import { Row, Col } from 'react-bootstrap';

class JobPosition extends React.Component {
    render() {
        return (
            <Row className="table-subtitle"><Col className="job-position">{this.props.position}</Col><Col> {this.props.tools}</Col></Row>
        );
    }
}

export default JobPosition;