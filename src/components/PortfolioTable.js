import React from 'react';

import Project from './Project'
import { Container } from 'react-bootstrap';


class PortfolioTable extends React.Component {
    projects = [
        {
            titleUrl: 'https://jennder.github.io/landscape/',
            title: 'landscape',
            subtitle: 'media arts capstone assignment, fall 2020',
            description: '"go with the flow..." is a multi-media art project from the project prompt "landscape." over the course of five weeks, we defined, contextualized, and developed a project based on the concept of landscape. '
        },
        {
            titleUrl: 'https://drive.google.com/file/d/1v-tDOliZIrg5Mp9VyxlQUjibyKZdso9g/view?usp=sharing',
            title: 'personal essay',
            subtitle: 'class assignment, fall 2018',
            description: 'assignment for the intro video class to practice using classroom technology: adobe premiere pro + after effects, lumix gh4, rode mic, zoom audio recorder'
        },
        {
            titleUrl: 'https://drive.google.com/file/d/1HCNLcTR1nmCwlBBRWMrp5yAEZbZyaBh4/view?usp=sharing',
            title: '"sum"',
            subtitle: 'class assignment, fall 2017',
            description: ['assignment for the 4d: sequence and  drawing class visual response to ',
                <a className="inline-link" href="https://www.nytimes.com/2009/06/14/books/excerpt-sum.html"><i>Sum</i></a>,
                ' by David Eagleman; the goal was to 1. categorize stock footage gathered by the class based on color and movement, 2. draw parallels to Eagleman\'s essay, and 3. create a visual essay using only native video and sound']
        }
    ]
    render() {
        return (
            <Container>
                {this.projects.map(item => (
                    <div className="project" key={item.titleUrl}>
                        <Project titleUrl={item.titleUrl} title={item.title} subtitle={item.subtitle} description={item.description} />
                    </div>
                ))}
            </Container>
        );
    }
}

export default PortfolioTable;