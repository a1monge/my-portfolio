import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import profileImage from '../img/profile.jpg'; // Import the image
import Skills from './Skills'; // Import the Skills component
import '../App.css'; // Import your CSS file

function Header() {
    useEffect(() => {
        const particles = []; // Array to store particle elements

        const createParticle = () => {
            let particle = particles.find(p => p.classList.contains('inactive')); // Find an inactive particle to reuse
            if (!particle) {
                particle = document.createElement('div');
                particle.classList.add('particle');
                document.body.appendChild(particle);
                particles.push(particle); // Add new particle to the array
            }

            particle.style.left = `${Math.random() * window.innerWidth}px`; // Random horizontal position within viewport
            particle.style.top = `${Math.random() * window.innerHeight}px`; // Random vertical position within viewport

            // Calculate drift distance based on initial position
            const driftX = Math.random() * 200 - 65; // Range of -65 to 135 pixels horizontally
            const driftY = Math.random() * 200 - 80; // Range of -80 to 120 pixels vertically

            particle.style.setProperty('--drift-x', `${driftX}px`);
            particle.style.setProperty('--drift-y', `${driftY}px`);
            particle.classList.remove('inactive'); // Remove inactive class to activate particle
        };

        // Function to generate particles initially and every 30 seconds
        const generateParticles = () => {
            for (let i = 0; i < 30; i++) {
                createParticle();
            }
        };

        // Initial particle generation
        generateParticles();

        // Set interval for particle generation
        const particleInterval = setInterval(generateParticles, 1000000);

        // Clean up function to clear interval on component unmount
        return () => clearInterval(particleInterval);

    }, []);

    return (
        <div className="container mt-4 header-container">
            <header className="header text-center header-content">
                <div className="row align-items-center">
                    <div className="col-md-8 text-left" style={{ textAlign: "left", marginLeft: "0" }}>
                        <h1 className="mt-4 text-left">
                            Alex Monge</h1>
                        <p className="lead">
                            Hello! I am an upcoming graduate passionate about cloud computing and eager <br />to pursue a career as an application developer.</p>
                        <a href="#Featured-Projects" className="btn btn-primary btn-lg">Featured Projects</a>
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
