import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert, Badge } from 'react-bootstrap';
import './Reservation.css';

const Reservation = () => {
  const [reservationData, setReservationData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    occasion: '',
    specialRequests: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const timeSlots = [
    '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
    '2:00 PM', '2:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM',
    '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM'
  ];

  const occasions = [
    { value: '', label: 'Select an occasion' },
    { value: 'birthday', label: 'Birthday' },
    { value: 'anniversary', label: 'Anniversary' },
    { value: 'business', label: 'Business Dinner' },
    { value: 'date', label: 'Date Night' },
    { value: 'family', label: 'Family Gathering' },
    { value: 'other', label: 'Other' }
  ];

  const guestOptions = [
    { value: '', label: 'Select number of guests' },
    { value: '1', label: '1 Guest' },
    { value: '2', label: '2 Guests' },
    { value: '3', label: '3 Guests' },
    { value: '4', label: '4 Guests' },
    { value: '5', label: '5 Guests' },
    { value: '6', label: '6 Guests' },
    { value: '7+', label: '7+ Guests (Please call us)' }
  ];

  const features = [
    {
      icon: '🕒',
      title: 'Quick Booking',
      description: 'Reserve your table in just a few clicks'
    },
    {
      icon: '🎉',
      title: 'Special Occasions',
      description: 'We make every celebration memorable'
    },
    {
      icon: '🍽️',
      title: 'Flexible Seating',
      description: 'Choose from various table sizes and arrangements'
    },
    {
      icon: '📱',
      title: 'Instant Confirmation',
      description: 'Get immediate confirmation of your reservation'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReservationData(prev => ({
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
    
    if (!reservationData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!reservationData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(reservationData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!reservationData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    if (!reservationData.date) {
      newErrors.date = 'Date is required';
    }
    
    if (!reservationData.time) {
      newErrors.time = 'Time is required';
    }
    
    if (!reservationData.guests) {
      newErrors.guests = 'Number of guests is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulate form submission
      console.log('Reservation submitted:', reservationData);
      setSubmitted(true);
      setReservationData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '',
        occasion: '',
        specialRequests: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }
  };

  // Get minimum date (today)
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="reservation-page">
      {/* Hero Section */}
      <section className="reservation-hero">
        <div className="hero-overlay">
          <Container>
            <Row className="align-items-center min-vh-50">
              <Col className="text-center text-white">
                <h1 className="reservation-title">Make a Reservation</h1>
                <p className="reservation-subtitle">
                  Secure your table for an unforgettable dining experience
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <Container className="py-5">
        <Row>
          {/* Reservation Form */}
          <Col lg={8} className="mb-5">
            <Card className="reservation-form-card">
              <Card.Body className="p-4">
                <h2 className="form-title mb-4">Book Your Table</h2>
                
                {submitted && (
                  <Alert variant="success" className="mb-4">
                    <h4>Reservation Confirmed! 🎉</h4>
                    <p>Thank you for choosing us. We've sent a confirmation email with your reservation details.</p>
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label>Full Name *</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={reservationData.name}
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
                        <Form.Label>Email Address *</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={reservationData.email}
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
                        <Form.Label>Phone Number *</Form.Label>
                        <Form.Control
                          type="tel"
                          name="phone"
                          value={reservationData.phone}
                          onChange={handleInputChange}
                          isInvalid={!!errors.phone}
                          placeholder="Your phone number"
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.phone}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label>Number of Guests *</Form.Label>
                        <Form.Select
                          name="guests"
                          value={reservationData.guests}
                          onChange={handleInputChange}
                          isInvalid={!!errors.guests}
                        >
                          {guestOptions.map((option, index) => (
                            <option key={index} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                          {errors.guests}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label>Date *</Form.Label>
                        <Form.Control
                          type="date"
                          name="date"
                          value={reservationData.date}
                          onChange={handleInputChange}
                          isInvalid={!!errors.date}
                          min={today}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.date}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label>Time *</Form.Label>
                        <Form.Select
                          name="time"
                          value={reservationData.time}
                          onChange={handleInputChange}
                          isInvalid={!!errors.time}
                        >
                          <option value="">Select a time</option>
                          {timeSlots.map((time, index) => (
                            <option key={index} value={time}>
                              {time}
                            </option>
                          ))}
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                          {errors.time}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label>Occasion</Form.Label>
                        <Form.Select
                          name="occasion"
                          value={reservationData.occasion}
                          onChange={handleInputChange}
                        >
                          {occasions.map((occasion, index) => (
                            <option key={index} value={occasion.value}>
                              {occasion.label}
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label>Special Requests</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          name="specialRequests"
                          value={reservationData.specialRequests}
                          onChange={handleInputChange}
                          placeholder="Any special requests or dietary requirements..."
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <div className="text-center mt-4">
                    <Button 
                      type="submit" 
                      variant="primary" 
                      size="lg"
                      className="submit-btn"
                    >
                      Confirm Reservation
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* Features and Info */}
          <Col lg={4}>
            <div className="reservation-info">
              {/* Features */}
              <Card className="features-card mb-4">
                <Card.Body className="p-4">
                  <h3 className="info-title mb-4">Why Choose Us</h3>
                  {features.map((feature, index) => (
                    <div key={index} className="feature-item mb-3">
                      <div className="feature-icon">{feature.icon}</div>
                      <div className="feature-content">
                        <h5 className="feature-title">{feature.title}</h5>
                        <p className="feature-description">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </Card.Body>
              </Card>

              {/* Booking Info */}
              <Card className="booking-info-card">
                <Card.Body className="p-4">
                  <h3 className="info-title mb-4">Booking Information</h3>
                  <div className="booking-info">
                    <div className="info-row">
                      <span className="info-label">Reservation Time:</span>
                      <span className="info-value">15 minutes</span>
                    </div>
                    <div className="info-row">
                      <span className="info-label">Cancellation:</span>
                      <span className="info-value">24 hours notice</span>
                    </div>
                    <div className="info-row">
                      <span className="info-label">Large Groups:</span>
                      <span className="info-value">Call us directly</span>
                    </div>
                    <div className="info-row">
                      <span className="info-label">Dress Code:</span>
                      <span className="info-value">Smart Casual</span>
                    </div>
                  </div>
                  
                  <div className="text-center mt-4">
                    <Badge bg="info" className="mb-2">
                      <i className="fas fa-phone me-2"></i>
                      Need Help? Call us: (555) 123-4567
                    </Badge>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Reservation;
