import React, { useEffect } from 'react';
import $ from 'jquery'; // Import jQuery for Bootstrap JS components
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS

const Navbar = () => {
    // Initialize the Bootstrap navbar toggle with jQuery
    useEffect(() => {
        $('.navbar-toggler').on('click', function () {
            $(this).toggleClass('active');
        });
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#About-Me">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Featured-Projects">Featured Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Portfolio">Portfolio</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.linkedin.com/in/alex-monge-7b551b207/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://github.com/a1monge" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;