import React from 'react';
import '../App.css';
import card from '../img/card.png';
import news from '../img/news.png';

const BackEnd = () => {
    return (
        <section id='BackEnd' className="BackEnd-section">
            <div className="container">
                <h2 className="text-center mb-4">Backend Projects</h2>
                <div className="card mb-4">
                    <div className="row no-gutters">
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Carbon Emissions Analysis</h5>
                                <p className="card-text">
                                    Used <strong>SQL</strong> and Visual Studio Code to analyze a dataset of product carbon emissions, focusing on industries contributing to over 75% of global emissions. Developed a complex SQL query to aggregate carbon footprints by industry, calculate percentage contributions, and identify top-emitting products. Delivered actionable insights to highlight the highest-emitting industries and their environmental impact, supporting sustainability initiatives. <strong>Click the github button below to see the image of my query result.</strong>
                                </p>
                                <a href="https://github.com/a1monge/carbon_footprint_analysis" className="btn btn-primary" target="_blank" rel="noopener noreferrer">GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-4">
                    <div className="row no-gutters">
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Webscrapper</h5>
                                <p className="card-text">
                                    Used <strong>Python</strong> to develop a webscrapper that fetches the top news headlines from the <strong>NewsAPI</strong>. It allows users to easily access the latest news articles based on selected categories and countries.
                                </p>
                                <a href="https://github.com/a1monge/webscrapper_project" className="btn btn-primary" target="_blank" rel="noopener noreferrer">GitHub</a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <img src={news} className="card-img" alt="News" />
                        </div>
                    </div>
                </div>
                <div className="card mb-4">
                    <div className="row no-gutters">
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Deck of Cards</h5>
                                <p className="card-text">
                                    This <strong>Go</strong> project implements a deck of 52 playing cards with features to create, shuffle, save, and load decks. It includes functionality for dealing cards and file handling, along with unit tests to ensure correct behavior. This project demonstrates my ability to work with Go's core features like <strong>slices</strong>, <strong>file I/O</strong>, and <strong>randomization</strong>, while showcasing my skills in writing <strong>modular</strong> and <strong>tested</strong> code.
                                </p>
                                <a href="https://github.com/a1monge/Deck-of-Cards" className="btn btn-primary" target="_blank" rel="noopener noreferrer">GitHub</a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <img src={card} className="card-img" alt="Card" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BackEnd;
