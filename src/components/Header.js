import React from 'react';
import '../App.css';
import profilePic from '../img/profile.jpg'; // Make sure you have a profile picture in the img folder

const Header = () => {
    return (
        <header className="header">
            <img className='img' src={profilePic} alt="Alex Monge" width="150" height="150" />
            <div>
                <h1 className="display-3">Alex Monge</h1>
                <p className="lead">Aspiring Software Developer</p>
                <div className="nav-icons">
                    <a className="nav-link" href="https://www.linkedin.com/in/alex-monge-7b551b207/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a className="nav-link" href="https://github.com/a1monge" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;
