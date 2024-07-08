// Skills.js
import React from 'react';
import python from '../img/python-logo.png'; // Import the image
import java from '../img/java-logo.png'; // Import the image
import Django from '../img/Django.png'; // Import the image
import sql from '../img/sql-logo.png'; // Import the image
import react from '../img/react-logo.png'; // Import the image

const Skills = () => {
    return (
        <div className="container text-center mt-5">
            <h3>Top Skills</h3>
            <div className="d-flex justify-content-center flex-wrap">
                <div className="skill m-3">
                    <img src={python} alt="Python Logo" style={{ maxWidth: "100%", height: "auto" }} />
                </div>
                <div className="skill m-3">
                    <img src={java} alt="Java Logo" style={{ maxWidth: "100%", height: "auto" }} />
                </div>
                <div className="skill m-3">
                    <img src={react} alt="React Logo" style={{ maxWidth: "100%", height: "auto" }} />
                </div>
                <div className="skill m-3">
                    <img src={sql} alt="SQL Logo" style={{ maxWidth: "100%", height: "auto" }} />
                </div>
                <div className="skill m-3">
                    <img src={Django} alt="Django Logo" style={{ maxWidth: "100%", height: "auto" }} />
                </div>
            </div>
        </div>
    );
}

export default Skills;
