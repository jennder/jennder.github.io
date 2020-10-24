import React from 'react';

import { Col, Container, Row } from 'react-bootstrap';
import SectionTitle from '../components/SectionTitle';
import PortfolioTable from '../components/PortfolioTable';

class Portfolio extends React.Component {
    render() {
        return (
            <Container className="page" fluid>
                <SectionTitle title="portfolio" />
                <PortfolioTable />
            </Container>


        )
    }
}

export default Portfolio;