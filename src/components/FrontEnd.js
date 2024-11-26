import React from 'react';
import '../App.css';
import galaga from '../img/Galaga.png';
import restaurant from '../img/restaurant.png';

const FrontEnd = () => {
    const projects = [
        {
            title: "Restaurant",
            description: "This website is a <strong>fully responsive web application</strong> developed using <strong>React </strong>, <strong>HTML/CSS </strong>, <strong>JavaScript </strong>,and <strong>npm</strong>. The project showcases my front-end development skills, including dynamic content rendering, responsive design with <strong>Bootstrap</strong>, and modern, intuitive interfaces.",
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
        <section id='FrontEnd' className="FrontEnd-section">
            <div className="container">
                <h2 className="text-center mb-4">Frontend Projects</h2>
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

export default FrontEnd;
