// Skills.js
import React from 'react';
import python from '../img/python-logo.png'; // Import the image
import java from '../img/java-logo.png'; // Import the image
import node from '../img/node-logo.png'; // Import the image
import sql from '../img/sql-logo.png'; // Import the image
import react from '../img/react-logo.png'; // Import the image
const Skills = () => {
    return (
        <div className="container text-center mt-5">
            <h3>Top Skills</h3>
            <div className="d-flex justify-content-around flex-wrap">
                <div className="skill m-3" style={{ width: "150px" }}>
                    <img src={python} alt="python logo" style={{ maxWidth: "100%", height: "auto" }} />
                </div>
                <div className="skill m-3" style={{ width: "150px" }}>
                    <img src={java} alt="python logo" style={{ maxWidth: "100%", height: "auto" }} />
                </div>
                <div className="skill m-3" style={{ width: "150px" }}>
                    <img src={react} alt="react logo" style={{ maxWidth: "100%", height: "auto" }} />
                </div>
                <div className="skill m-3" style={{ width: "150px" }}>
                    <img src={sql} alt="sql logo" style={{ maxWidth: "100%", height: "auto" }} />
                </div>
                <div className="skill m-3" style={{ width: "150px" }}>
                    <img src={node} alt="node,js logo" style={{ maxWidth: "100%", height: "auto" }} />
                </div>
            </div>
        </div>
    );
}

export default Skills;