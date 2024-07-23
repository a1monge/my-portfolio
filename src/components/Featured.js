import React from 'react';
import '../App.css';
import collab from '../img/collab.png';
import galaga from '../img/Galaga.png';
import restaurant from '../img/restaurant.png';
import dealership from '../img/deployed_loggedin.png';

const Featured = () => {
    const projects = [
        {
            title: "Wildlife Grid",
            description: "WildlifeGrid is a full stack web application developed using <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>PHP</strong>, and <strong>SQL</strong>. I was part of a collaborative effort to monitor and manage the distribution of flora and fauna. The project aimed to raise awareness about local ecosystems and facilitate community involvement in wildlife monitoring.",
            appLink: "https://a1monge.github.io/WildlifeGrid.com/index.html",
            githubLink: "https://github.com/a1monge/WildlifeGrid.com.git",
            img: collab
        },
        {
            title: "Car Dealership",
            description: "The Full Stack Developer Capstone Project is a comprehensive demonstration of skills in developing a web application from scratch, incorporating both front-end and back-end components including <strong>React</strong>, <strong>HTML/CSS</strong>, <strong>JavaScript</strong>, <strong>Python</strong>, <strong>Django</strong>, and <strong>npm</strong>",
            appLink: null,
            githubLink: "https://github.com/a1monge/xrwvm-fullstack_developer_capstone.git",
            img: dealership
        },
        {
            title: "Restaurant",
            description: "This website is a fully responsive web application developed using <strong>React</strong>. The project showcases my front-end development skills, including dynamic content rendering, responsive design with <strong>Bootstrap</strong>, and modern, intuitive interfaces.",
            appLink: null,
            githubLink: "https://github.com/a1monge/Restaurant-Website.git",
            img: restaurant
        },
        {
            title: "Galaga Game",
            description: "This was a personal project in which I created an imitation game of the old arcade game Galaga using <strong>JavaScript</strong> and <strong>HTML</strong>. In this game you control a spaceship at the bottom of the screen. Your objective is to shoot down the waves of enemies that appear from the top of the screen while avoiding their projectiles. The game keeps track of your score, which increases as you destroy enemies. The game ends when an enemy projectile hits your spaceship. Use the WASD keys to move and use the spacebar to shot projectiles.",
            appLink: "https://a1monge.github.io/Galaga_Game/",
            githubLink: "https://github.com/a1monge/Galaga_Game.git",
            img: galaga
        },
        // Other projects
    ];

    return (
        <section id='Featured' className="featured-section">
            <div className="container">
                <h2 className="text-center mb-4">Development Projects</h2>
                {projects.map((project, index) => (
                    <div className="card mb-4" key={index}>
                        <div className="row no-gutters">
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{project.title}</h5>
                                    <p className="card-text" dangerouslySetInnerHTML={{ __html: project.description }}></p>
                                    <a href={project.githubLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Github</a>
                                    {project.appLink && (
                                        <a href={project.appLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Static App</a>
                                    )}
                                </div>
                            </div>
                            <div className="col-md-4">
                                <img src={project.img} className="card-img" alt={`${project.title} screenshot`} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Featured;
