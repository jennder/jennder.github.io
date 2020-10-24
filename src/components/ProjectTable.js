import React from 'react';

import Project from './Project'
import { Container } from 'react-bootstrap';


class ProjectTable extends React.Component {
    projects = [
        {
            titleUrl: 'https://feliciazhang.github.io/sage/',
            title: 'sage',
            subtitle: 'class assignment, fall 2019',
            description: 'sage is a semester long group for a human and computer interaction class; it is a meal planning application built in react, and the culmination of several iterations of paper prototyping, user experience testing, and heuristic testing'
        },
        {
            titleUrl: 'https://drive.google.com/file/d/1YOKlkra_IAHn_bRTP4ZIBJdWxQIrsIib/view?usp=sharing',
            title: 'data-driven traffic forecasting',
            subtitle: 'northeastern university, fall 2019',
            description: ['research project extension based on Northeastern faculty paper: ',
                <a className="inline-link" href="https://arxiv.org/abs/1707.01926"><i>Diffusion Convolutional Recurrent Neural Network: Data-Driven Traffic Forecasting</i></a>,
                ' advised by Rose Yu', <p></p>, 'spatiotemporal forecasting machine learning research that studied the effects of weather and climate on traffic prediction',
                <p></p>, '😀📣', <a className="inline-link" href="https://docs.google.com/presentation/d/1ZpwxcewWfHYxDzbKyllAMCYWFnZbjoggV0cZ7hfeYCs/edit?usp=sharing">presentation slides</a>, '🚗🗺️']
        },
        {
            titleUrl: 'https://devpost.com/software/luxo-jr-8tq64c',
            title: 'luxo',
            subtitle: 'mit hacking arts, fall 2018',
            description: ['like the excitable and bashful Pixar lamp, Luxo Jr, this project is an immersive virtual reality experience taking place in our living room filled with interactive and animated furniture with individual personalities',
                <p></p>,
                <a className="inline-link" href="https://www.wayfair.com/">Wayfair</a>, ' Brand Challenge Winner; Fan Favorite']
        },
        {
            titleUrl: 'https://devpost.com/software/motion-sculpting',
            title: 'motion sculpting',
            subtitle: 'mit hacking arts, fall 2017',
            description: ['inspired by the theme "why human?", we explored how and why humans are so crucial to development of both art and technology in the age of artificial intelligence',
                <p></p>,
                <a className="inline-link" href="https://www.noitom.com/">NOITOM</a>, ' Brand Challenge Winner']
        },
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

export default ProjectTable;