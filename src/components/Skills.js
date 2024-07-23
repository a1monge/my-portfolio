import React from 'react';
import python from '../img/python-logo.png';
import java from '../img/java-logo.png';
import Django from '../img/Django.png';
import sql from '../img/sql-logo.png';
import react from '../img/react-logo.png';

const Skills = () => {
    return (
        <section id="Skills" className="skills-section">
            <h3 className="skills-heading text-center">Top Skills</h3>
            <div className="skills-container">
                <div className="skill">
                    <img src={python} alt="Python Logo" />
                </div>
                <div className="skill">
                    <img src={java} alt="Java Logo" />
                </div>
                <div className="skill">
                    <img src={react} alt="React Logo" />
                </div>
                <div className="skill">
                    <img src={sql} alt="SQL Logo" />
                </div>
                <div className="skill">
                    <img src={Django} alt="Django Logo" />
                </div>
            </div>
        </section>
    );
}

export default Skills;
