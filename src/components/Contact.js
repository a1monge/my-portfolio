import React, { useState } from 'react';
import '../App.css'; // Import your custom CSS

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission

        console.log('Sending data:', formData); // Debugging line

        // Send form data to the server
        fetch('https://portfolio-back-end-gy7r.onrender.com/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'  // Change to JSON
            },
            body: JSON.stringify(formData)  // Convert formData to JSON
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                if (data.status === 'success') {
                    alert('Message sent successfully!');
                    setFormData({
                        name: '',
                        email: '',
                        subject: '',
                        message: ''
                    });
                } else {
                    alert('Failed to send message. Please try again.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred while sending the message.');
            });
    };

    return (
        <section id='Contact' className="contact-section">
            <div className="container">
                <h2 className="text-center mb-4">Contact Me</h2>

                <div className="card mb-4">
                    <div className="row no-gutters">
                        <div className="col-md-6">
                            <div className="card-text d-flex flex-column justify-content-between">
                                <form onSubmit={handleSubmit} className="contact-form">
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="form-control"
                                            value={formData.name}
                                            onChange={handleInputChange}
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
                                            value={formData.email}
                                            onChange={handleInputChange}
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
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            className="form-control"
                                            rows="4"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                        ></textarea>
                                    </div>
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
