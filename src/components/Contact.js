import React from 'react';
import '../App.css'; // Import your custom CSS

const Contact = () => {
    return (
        <section id='Contact' className="contact-section">
            <div className="container">
                <h2 className="text-center mb-4">Contact Me</h2>

                <div className="card mb-4">
                    <div className="row no-gutters">
                        <div className="col-md-6">
                            <div className="card-text d-flex flex-column justify-content-between">
                                <form
                                    action="http://localhost:5000/send-email" // or your deployed backend URL
                                    method="POST"
                                    className="contact-form"
                                >
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="subject">Subject</label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            className="form-control"
                                            rows="4"
                                            required
                                        ></textarea>
                                    </div>
                                    {/* Move the button inside the form */}
                                    <div className="text-right mt-3">
                                        <button type="submit" className="btn btn-primary">Send</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card-text">
                                <h4>Contact Information</h4>
                                <p><strong>Phone:</strong> (210) 848-3617</p>
                                <p><strong>Email:</strong> monge.alex572@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
