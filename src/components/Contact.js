import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const businessHours = [
    { day: 'Monday - Friday', hours: '11:00 AM - 10:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 11:00 PM' },
    { day: 'Sunday', hours: '10:00 AM - 9:00 PM' }
  ];

  const contactInfo = [
    {
      icon: '📍',
      title: 'Address',
      content: '123 Gourmet Street, Foodie District, City, State 12345'
    },
    {
      icon: '📞',
      title: 'Phone',
      content: '+1 (555) 123-4567'
    },
    {
      icon: '✉️',
      title: 'Email',
      content: 'info@restaurant.com'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulate form submission
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-overlay">
          <Container>
            <Row className="align-items-center min-vh-50">
              <Col className="text-center text-white">
                <h1 className="contact-title">Get in Touch</h1>
                <p className="contact-subtitle">
                  We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <Container className="py-5">
        <Row>
          {/* Contact Form */}
          <Col lg={8} className="mb-5">
            <Card className="contact-form-card">
              <Card.Body className="p-4">
                <h2 className="form-title mb-4">Send us a Message</h2>
                
                {submitted && (
                  <Alert variant="success" className="mb-4">
                    Thank you for your message! We'll get back to you soon.
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label>Name *</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          isInvalid={!!errors.name}
                          placeholder="Your full name"
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.name}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label>Email *</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          isInvalid={!!errors.email}
                          placeholder="your.email@example.com"
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.email}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Your phone number"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label>Subject</Form.Label>
                        <Form.Select
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                        >
                          <option value="">Select a subject</option>
                          <option value="reservation">Reservation Inquiry</option>
                          <option value="feedback">Feedback</option>
                          <option value="catering">Catering Services</option>
                          <option value="general">General Inquiry</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-4">
                    <Form.Label>Message *</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      isInvalid={!!errors.message}
                      placeholder="Tell us how we can help you..."
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.message}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Button 
                    type="submit" 
                    variant="primary" 
                    size="lg"
                    className="submit-btn"
                  >
                    Send Message
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* Contact Information */}
          <Col lg={4}>
            <div className="contact-info">
              {/* Contact Details */}
              <Card className="contact-info-card mb-4">
                <Card.Body className="p-4">
                  <h3 className="info-title mb-4">Contact Information</h3>
                  {contactInfo.map((info, index) => (
                    <div key={index} className="info-item mb-3">
                      <div className="info-icon">{info.icon}</div>
                      <div className="info-content">
                        <h5 className="info-label">{info.title}</h5>
                        <p className="info-text">{info.content}</p>
                      </div>
                    </div>
                  ))}
                </Card.Body>
              </Card>

              {/* Business Hours */}
              <Card className="hours-card">
                <Card.Body className="p-4">
                  <h3 className="info-title mb-4">Business Hours</h3>
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="hours-item">
                      <span className="hours-day">{schedule.day}</span>
                      <span className="hours-time">{schedule.hours}</span>
                    </div>
                  ))}
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>

        {/* Map Section */}
        <Row className="mt-5">
          <Col>
            <Card className="map-card">
              <Card.Body className="p-0">
                <div className="map-container">
                  <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.549951679235!2d75.98787347771415!3d10.997302961228383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7b35e3fe46e0b%3A0x372438ac1bcbaf1a!2sSign%20Restaurant!5e0!3m2!1sen!2ssa!4v1756193344664!5m2!1sen!2ssa"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Restaurant Location"
                  ></iframe>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
