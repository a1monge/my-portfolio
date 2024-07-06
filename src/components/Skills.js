// Skills.js
import React from 'react';

const Skills = () => {
    return (
        <div className="container text-center mt-5">
            <h3>Top Skills</h3>
            <div className="d-flex justify-content-around flex-wrap">
                <div className="skill m-3" style={{ width: "150px" }}>
                    <h5>Python</h5>
                </div>
                <div className="skill m-3" style={{ width: "150px" }}>
                    <h5>React.js</h5>
                </div>
                <div className="skill m-3" style={{ width: "150px" }}>
                    <h5>Java</h5>
                </div>
                <div className="skill m-3" style={{ width: "150px" }}>
                    <h5>SQL</h5>
                </div>
                <div className="skill m-3" style={{ width: "150px" }}>
                    <h5>Node.js</h5>
                </div>
            </div>
        </div>
    );
}

export default Skills;