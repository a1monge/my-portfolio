import React from 'react';
import '../App.css';
import d0 from '../img/diagram0.png'
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
                                <h5 className="card-title">Cloud Resume Challenge</h5>
                                <p className="card-text">
                                    Developed and deployed a cloud-based resume website using <strong>React</strong>, hosted on <strong>Amazon S3</strong> with <strong>CloudFront</strong> for HTTPS. Implemented a <strong></strong>serverless backend API with <strong>AWS Lambda</strong> and <strong>API Gateway</strong> to support a dynamic visitor counter stored in <strong>DynamoDB</strong>. Automated deployment and testing using <strong>GitHub Actions</strong> and managed infrastructure using <strong>Terraform</strong>.
                                </p>
                                <a href="https://github.com/a1monge/ResumeChallenge" className="btn btn-primary" target="_blank" rel="noopener noreferrer">GitHub</a>
                                <a href="https://almonge-resume.com" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Live App</a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <img src={d0} className="card-img" alt="Cloud Resume Diagram" />
                        </div>
                    </div>
                </div>
                <div className="card mb-4">
                    <div className="row no-gutters">
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Data Analytics Proof of Concept</h5>
                                <p className="card-text">
                                    This project demonstrates a data analytics solution using AWS-managed services such as <strong>S3</strong>, <strong>Kinesis Firehose</strong>. <strong>Athena</strong>, <strong>QuickSight</strong>, <strong>Lambda</strong>, and <strong>API Gateway</strong>. It involves the ingestion, transformation, storage, and visualization of clickstream data for a restaurant owner who wants to derive insights from menu item orders.
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
