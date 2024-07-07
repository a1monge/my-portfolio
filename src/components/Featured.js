// Featured.js
import React from 'react';

const FeaturedProjects = () => {
    const projects = [
        {
            title: "Project One",
            description: "Description of project one.",
            link: "https://github.com/username/project-one"
        },
        {
            title: "Project Two",
            description: "Description of project two.",
            link: "https://github.com/username/project-two"
        },
        {
            title: "Project Three",
            description: "Description of project three.",
            link: "https://github.com/username/project-three"
        }
    ];

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Featured Projects</h2>
            <div className="row">
                {projects.map((project, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{project.title}</h5>
                                <p className="card-text">{project.description}</p>
                                <a href={project.link} className="btn btn-primary">View on GitHub</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FeaturedProjects;
