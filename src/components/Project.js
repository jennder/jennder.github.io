import React from 'react';

import { Row, Col } from 'react-bootstrap'

class Project extends React.Component {
  
    render() {
        return (
            <Row>
                    <Col className="table-title"><a className="inline-link" href={this.props.titleUrl}>{this.props.title}</a>
                        <div className="table-subtitle"><p></p>{this.props.subtitle}</div>
                    </Col>
                    <Col className="table-description"><div className="project-description">
                    {this.props.description}   
                    </div></Col>
            </Row>
        );
    }
}

export default Project;