import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import profileImage from '../img/profile.jpg'; // Import the image
import Skills from './Skills'; // Import the Skills component

function Header() {
    return (
        <div className="container mt-4">
            <header className="header text-center">
                <div className="row align-items-center">
                    <div className="col-md-8">
                        <h1 className="mt-4">Alex Monge</h1>
                        <p className="lead">Hello! I am an upcoming graduate passionate about cloud computing and eager to pursue a career as an application developer.</p>
                        <a href="#get-started" className="btn btn-primary btn-lg">Let's get started</a>
                    </div>
                    <div className="col-md-4">
                        <img src={profileImage} alt="Alex Monge" className="rounded-circle img-fluid" style={{ maxWidth: "100%", height: "auto" }} />
                    </div>
                </div>
                <Skills />
            </header>
        </div>
    );
}

export default Header;
