import React, { useState } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Ensure Bootstrap JS is included
import '../Navbar.css';

const Navbar = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen); // Toggle the navbar open state
    };

    return (
        <section id='Navbar' className="Navbar-section">
            <nav className="navbar navbar-dark fixed-top z-index-1000">
                <div className="container-fluid">
                    {/* Navbar Toggler (Dropdown Button for all screen sizes) */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={toggleNavbar} // Toggle the state when clicked
                        aria-controls="navbarNav"
                        aria-expanded={isNavbarOpen ? "true" : "false"} // Dynamically set aria-expanded
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span> {/* Hamburger icon */}
                    </button>

                    {/* Collapsible Navbar Links */}
                    <div className={`collapse navbar-collapse ${isNavbarOpen ? "show" : ""}`} id="navbarNav">
                        <ul className="navbar-nav ms-auto"> {/* Align navbar items to the right */}
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#Cloud">AWS Architectures</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#FullStack">Full Stack</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#FrontEnd">Frontend</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#BackEnd">Backend</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#Contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default Navbar;
