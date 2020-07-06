import React from 'react';
import { Container } from 'react-bootstrap';
import Job from './Job'

class Experience extends React.Component {
    jobs = [
        {
            place: 'Certain Lending',
            start: 'January 2020',
            end: 'March 2020',
            position: 'Full Stack Software Developer (Co-op)',
            tools: 'VueJS, Typescript, Javascript, Docker, Postgres, AWS'
        },
        {
            place: 'Khoury College of Computer Sciences, Northeastern University',
            start: 'September 2017',
            end: 'present',
            position: 'Teaching Assistant',
            tools: 'Fundamentals of Computer Science 1'
        },
        {
            position: 'Fellow',
            tools: 'First Year Seminar'
        },
        {
            place: 'Kryuus',
            start: 'January 2019',
            end: 'August 2019',
            position: 'Software Developer in Search (Co-op)',
            tools: 'Python, Elasticsearch, Kibana, Datadog, Docker, AWS'
        },
        {
            place: 'Massachusetts Medical Society',
            start: 'January 2018',
            end: 'June 2018',
            position: 'Software QA Engineer, Business Analyst (Co-op)',
            tools: 'Ruby, Microsoft Excel, Selenium Webdriver'
        },
        {
            place: 'ACM Siggraph',
            start: 'August 2017',
            position: 'Student Volunteer',
            tools: 'Computer Graphics Conference'
        }
    ];

    render() {
        return (
            <Container>
                {this.jobs.map(item => (
                    <div key={item.place}>
                        <Job place={item.place} start={item.start} end={item.end} position={item.position} tools={item.tools} />
                    </div>
                ))}
                
            </Container>
        );
    }
}

export default Experience;