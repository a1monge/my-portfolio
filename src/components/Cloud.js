import React from 'react';
import '../App.css';
import d1 from '../img/diagram.png';
import d2 from '..//img/Diagram_serverless.png';

const Cloud = () => {
    return (
        <section id='Cloud' className="cloud-section">
            <div className="container">
                <h2 className="text-center mb-4">AWS Cloud Architectures</h2>
                <div className="card mb-4">
                    <div className="row no-gutters">
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Data Analytics Proof of Concept</h5>
                                <p className="card-text">
                                    This project demonstrates a <strong>data analytics solution</strong> using AWS managed services. It involves the <strong>ingestion</strong>, <strong>transformation</strong>, <strong>storage</strong>, and <strong>visualization</strong> of clickstream data for a restaurant owner who wants to derive insights from menu item orders.
                                </p>
                                <a href="https://github.com/a1monge/Data-Analytics-Proof-Of-Concept" className="btn btn-primary" target="_blank" rel="noopener noreferrer">GitHub</a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <img src={d1} className="card-img" alt="Data Analytics Proof of Concept" />
                        </div>
                    </div>
                </div>

                <div className="card mb-4">
                    <div className="row no-gutters">
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Serverless Web Backend</h5>
                                <p className="card-text">
                                    This project demonstrates a <strong>serverless web backend architecture</strong> using various AWS services. The architecture is designed to <strong>handle spikes in demand</strong> efficiently and ensure <strong>decoupled application components</strong>. The solution was implemented for a hypothetical customer who sells cleaning supplies and experiences fluctuating web traffic.
                                </p>
                                <a href="https://github.com/a1monge/Serverless-Web-Backend-on-AWS" className="btn btn-primary" target="_blank" rel="noopener noreferrer">GitHub</a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <img src={d2} className="card-img" alt="Serverless Web Backend" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cloud;
