import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import './About.css';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Chef Maria Rodriguez",
      position: "Executive Chef",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
      bio: "With over 15 years of culinary experience, Chef Maria brings passion and creativity to every dish.",
      specialties: ["Mediterranean", "Fusion Cuisine"]
    },
    {
      id: 2,
      name: "David Chen",
      position: "Sous Chef",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      bio: "Specializing in Asian fusion and traditional techniques, David creates unforgettable flavor combinations.",
      specialties: ["Asian Fusion", "Pastry"]
    },
    {
      id: 3,
      name: "Sarah Johnson",
      position: "Pastry Chef",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400",
      bio: "Sarah's artistic approach to desserts has earned her recognition in culinary competitions worldwide.",
      specialties: ["Desserts", "Baking"]
    }
  ];

  const values = [
    {
      icon: "🌱",
      title: "Fresh Ingredients",
      description: "We source only the finest, locally-sourced ingredients to ensure exceptional quality in every dish."
    },
    {
      icon: "👨‍🍳",
      title: "Expert Chefs",
      description: "Our team of experienced chefs brings creativity and passion to create memorable dining experiences."
    },
    {
      icon: "💚",
      title: "Sustainability",
      description: "We're committed to sustainable practices, from farm-to-table sourcing to eco-friendly operations."
    },
    {
      icon: "🤝",
      title: "Community",
      description: "Building strong relationships with our community through exceptional service and local partnerships."
    }
  ];

  const milestones = [
    { year: "2010", title: "Restaurant Founded", description: "Started as a small family-owned restaurant" },
    { year: "2015", title: "First Award", description: "Received 'Best Fine Dining' award from City Magazine" },
    { year: "2018", title: "Expansion", description: "Expanded to accommodate more guests and events" },
    { year: "2023", title: "Excellence", description: "Consistently rated among top restaurants in the region" }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-overlay">
          <Container>
            <Row className="align-items-center min-vh-50">
              <Col className="text-center text-white">
                <h1 className="about-title">Our Story</h1>
                <p className="about-subtitle">
                  A journey of passion, creativity, and culinary excellence
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4">
              <div className="story-image">
                <img 
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600" 
                  alt="Restaurant Interior" 
                  className="img-fluid rounded"
                />
              </div>
            </Col>
            <Col lg={6}>
              <div className="story-content">
                <h2 className="section-title">A Culinary Journey</h2>
                <p className="story-text">
                  Founded in 2010, our restaurant began as a dream to create extraordinary dining experiences. 
                  What started as a small family-owned establishment has grown into one of the most beloved 
                  restaurants in the city, known for its innovative cuisine and warm hospitality.
                </p>
                <p className="story-text">
                  Our philosophy is simple: we believe that great food has the power to bring people together, 
                  create memories, and inspire joy. Every dish we serve is crafted with care, using the finest 
                  ingredients and traditional techniques combined with modern innovation.
                </p>
                <p className="story-text">
                  Today, we continue to push culinary boundaries while staying true to our roots of 
                  exceptional service and unforgettable flavors.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Values Section */}
      <section className="values-section py-5 bg-light">
        <Container>
          <Row>
            <Col className="text-center mb-5">
              <h2 className="section-title">Our Values</h2>
              <p className="section-subtitle">The principles that guide everything we do</p>
            </Col>
          </Row>
          <Row>
            {values.map((value, index) => (
              <Col key={index} lg={3} md={6} className="mb-4">
                <Card className="value-card h-100 text-center">
                  <Card.Body>
                    <div className="value-icon">{value.icon}</div>
                    <Card.Title className="value-title">{value.title}</Card.Title>
                    <Card.Text className="value-description">{value.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Team Section */}
      <section className="team-section py-5">
        <Container>
          <Row>
            <Col className="text-center mb-5">
              <h2 className="section-title">Meet Our Team</h2>
              <p className="section-subtitle">The talented individuals behind our culinary excellence</p>
            </Col>
          </Row>
          <Row>
            {teamMembers.map((member) => (
              <Col key={member.id} lg={4} md={6} className="mb-4">
                <Card className="team-card h-100">
                  <div className="team-image-wrapper">
                    <Card.Img variant="top" src={member.image} className="team-image" />
                  </div>
                  <Card.Body className="text-center">
                    <Card.Title className="team-name">{member.name}</Card.Title>
                    <Card.Subtitle className="team-position mb-3">{member.position}</Card.Subtitle>
                    <Card.Text className="team-bio">{member.bio}</Card.Text>
                    <div className="team-specialties">
                      {member.specialties.map((specialty, index) => (
                        <Badge key={index} bg="primary" className="me-2 mb-2">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Milestones Section */}
      <section className="milestones-section py-5 bg-light">
        <Container>
          <Row>
            <Col className="text-center mb-5">
              <h2 className="section-title">Our Journey</h2>
              <p className="section-subtitle">Key milestones in our restaurant's history</p>
            </Col>
          </Row>
          <Row>
            {milestones.map((milestone, index) => (
              <Col key={index} lg={3} md={6} className="mb-4">
                <div className="milestone-card text-center">
                  <div className="milestone-year">{milestone.year}</div>
                  <h4 className="milestone-title">{milestone.title}</h4>
                  <p className="milestone-description">{milestone.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="about-cta py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={8} className="text-center text-lg-start">
              <h2>Experience Our Story</h2>
              <p className="lead">Join us for an unforgettable dining experience that tells our story through every bite.</p>
            </Col>
            <Col lg={4} className="text-center text-lg-end">
              <button className="btn btn-primary btn-lg">Make a Reservation</button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default About;
