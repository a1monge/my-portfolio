import React from 'react';
import '../App.css';
import projectImage from '../img/project-placeholder.jpg';
import collab from '../img/collab.png';
import galaga from '../img/Galaga.png';

const Featured = () => {
    const projects = [
        {
            title: "Full Stack Capstone Project",
            description: "Description of project three.",
            link: "https://github.com/username/project-three",
            img: projectImage
        },

        {
            title: "WildlifeGrid.com",
            description: "WildlifeGrid.com is a web application developed as part of a collaborative effort to monitor and manage the distribution of flora and fauna. The project aims to raise awareness about local ecosystems and facilitate community involvement in wildlife monitoring.",
            link: "https://github.com/a1monge/WildlifeGrid.com.git",
            img: collab
        },

        {
            title: "Galaga Game",
            description: "This was a personal project in where I created an imitation game of Galaga. In this game you control a spaceship at the bottom of the screen. Your objective is to shoot down the waves of enemies that appear from the top of the screen while avoiding their projectiles. The game keeps track of your score, which increases as you destroy enemies. The game ends when an enemy projectile hits your spaceship.",
            link: "https://github.com/a1monge/Galaga.git",
            img: galaga
        },

    ];

    return (
        <section id='Featured'>
            <div className="featured-section text-white py-5">
                <div className="container">
                    <h2 className="text-center mb-4">Featured Projects</h2>
                    {projects.map((project, index) => (
                        <div className="card text-white mb-4" key={index}>
                            <div className="row no-gutters">
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{project.title}</h5>
                                        <p className="card-text">{project.description}</p>
                                        <a href={project.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <img src={project.img} alt={project.title} className="project-img" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Featured;
