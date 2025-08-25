import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import './Home.css';

const Home = () => {
  const [featuredRestaurants, setFeaturedRestaurants] = useState([]);

  useEffect(() => {
    // Simulate fetching featured restaurants
    const mockFeatured = [
      {
        id: 1,
        name: "Gourmet Haven",
        cuisine: "Fine Dining",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500",
        description: "Experience culinary excellence in an elegant atmosphere."
      },
      {
        id: 2,
        name: "Spice Garden",
        cuisine: "Asian Fusion",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=500",
        description: "Authentic flavors with a modern twist."
      },
      {
        id: 3,
        name: "Rustic Table",
        cuisine: "Farm-to-Table",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=500",
        description: "Fresh, local ingredients in every dish."
      }
    ];
    setFeaturedRestaurants(mockFeatured);
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <Container>
            <Row className="align-items-center min-vh-100">
              <Col lg={6} className="text-white">
                <h1 className="hero-title">Discover Amazing Restaurants</h1>
                <p className="hero-subtitle">
                  Explore the finest dining experiences in your city. From cozy cafes to upscale restaurants, 
                  find your perfect meal with just a few clicks.
                </p>
                <div className="hero-buttons">
                  <Link to="/restaurants">
                    <Button variant="primary" size="lg" className="me-3">
                      Explore Restaurants
                    </Button>
                  </Link>
                  <Link to="/reservation">
                    <Button variant="outline-light" size="lg" className='banner-button'>
                      Make Reservation
                    </Button>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* Featured Restaurants */}
      <section className="featured-section py-5">
        <Container>
          <Row>
            <Col className="text-center mb-5">
              <h2 className="section-title">Featured Restaurants</h2>
              <p className="section-subtitle">Handpicked restaurants for an exceptional dining experience</p>
            </Col>
          </Row>
          <Row>
            {featuredRestaurants.map((restaurant) => (
              <Col key={restaurant.id} lg={4} md={6} className="mb-4">
                <Card className="featured-card h-100">
                  <div className="card-img-wrapper">
                    <Card.Img variant="top" src={restaurant.image} className="featured-card-img" />
                    <div className="card-overlay">
                      <Link to={`/viewrestaurant/${restaurant.id}`}>
                        <Button variant="light">View Details</Button>
                      </Link>
                    </div>
                  </div>
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{restaurant.name}</Card.Title>
                    <Card.Text className="text-white">{restaurant.cuisine}</Card.Text>
                    <Card.Text>{restaurant.description}</Card.Text>
                    <div className="rating mt-auto">
                      <span className="stars">★★★★★</span>
                      <span className="rating-text">{restaurant.rating}</span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section className="services-section py-5">
        <Container>
          <Row>
            <Col className="text-center mb-5">
              <h2 className="section-title">Why Choose Us</h2>
              <p className="section-subtitle">We make dining easy and enjoyable</p>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="text-center mb-4">
              <div className="service-icon">
                <i className="fas fa-utensils"></i>
              </div>
              <h4>Wide Selection</h4>
              <p>Browse through hundreds of restaurants offering diverse cuisines and dining experiences.</p>
            </Col>
            <Col md={4} className="text-center mb-4">
              <div className="service-icon">
                <i className="fas fa-clock"></i>
              </div>
              <h4>Easy Reservations</h4>
              <p>Book your table in seconds with our streamlined reservation system.</p>
            </Col>
            <Col md={4} className="text-center mb-4">
              <div className="service-icon">
                <i className="fas fa-star"></i>
              </div>
              <h4>Verified Reviews</h4>
              <p>Read authentic reviews from real customers to make informed decisions.</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={8} className="text-center text-lg-start">
              <h2>Ready to Discover Amazing Food?</h2>
              <p className="lead">Join thousands of food lovers who trust us for their dining experiences.</p>
            </Col>
            <Col lg={4} className="text-center text-lg-end">
              <Link to="/restaurants">
                <Button variant="primary" size="lg">
                  Start Exploring
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
