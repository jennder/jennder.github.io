import React from 'react';

import { Row, Col } from 'react-bootstrap';

class SectionTitle extends React.Component {

    render() {
        return (
            <Row className="section-title">
                <Col>
                    {this.props.title}
                </Col>
            </Row>
        );
    }
}

export default SectionTitle;