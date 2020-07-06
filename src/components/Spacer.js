import React from 'react';

import { Row, Col } from 'react-bootstrap';

class Spacer extends React.Component {

    render() {
        return (
            <Row>
                <Col />
                <Col className="verticle-line"><div style={{height: this.props.size === undefined ? "500px" : this.props.size + "px" }}></div></Col>
            </Row>
        );
    }
}

export default Spacer;