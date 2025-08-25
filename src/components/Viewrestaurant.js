import React from 'react'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Container, Row, Col, Card, Badge, Button, Alert } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faClock, faUtensils, faStar, faArrowLeft, faPhone, faGlobe } from '@fortawesome/free-solid-svg-icons'
import Restoperation from './Restoperation';
import Restreview from './Restreview';
import Loader from './Loader'
import ErrorMessage from './ErrorMessage'
import './Viewrestaurant.css'

function Viewrestaurant() {
    const params = useParams()
    const [allRestaurants, setRestaurants] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    // Debug logging
    console.log('Viewrestaurant component rendered')
    console.log('Params:', params)
    console.log('Restaurant ID:', params.id)

    // function to call api to get all restaurant items from restaurants.json
    const getRestaurants = async () => {
        try {
            setLoading(true)
            console.log('Fetching restaurants data...')
            const res = await fetch('/restaurants.json')
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`)
            }
            const data = await res.json()
            console.log('Restaurants data loaded:', data)
            setRestaurants(data.restaurants)
        } catch (err) {
            console.error('Error loading restaurants:', err)
            setError(err?.message || 'Failed to load restaurant')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getRestaurants()
    }, [])

    const viewrest = allRestaurants.find(item => item.id == params.id || item.id === parseInt(params.id))
    console.log('Found restaurant:', viewrest)
    console.log('All restaurants:', allRestaurants)
    console.log('Searching for ID:', params.id)
    console.log('ID type:', typeof params.id)

    if (loading) return <Loader />
    if (error) return <ErrorMessage message={error} />
    if (!viewrest) {
        return (
            <div className="view-restaurant-page">
                <Container>
                    <div className="back-navigation">
                        <Link to="/restaurants" className="back-link">
                            <FontAwesomeIcon icon={faArrowLeft} /> Back to Restaurants
                        </Link>
                    </div>
                    <div className="text-center py-5 restaurant-not-found">
                        <h2>Restaurant Not Found</h2>
                        <p>The restaurant with ID {params.id} could not be found.</p>
                        <p>Available restaurant IDs: {allRestaurants.map(r => r.id).join(', ')}</p>
                        <Link to="/restaurants">
                            <Button variant="primary">Browse All Restaurants</Button>
                        </Link>
                    </div>
                </Container>
            </div>
        )
    }

    return (
        <div className="view-restaurant-page">
            <Container>
                {/* Back Navigation */}
                <div className="back-navigation">
                    <Link to="/restaurants" className="back-link">
                        <FontAwesomeIcon icon={faArrowLeft} /> Back to Restaurants
                    </Link>
                </div>

                {/* Hero Section */}
                <div className="restaurant-hero">
                    <Row>
                        <Col lg={6} md={12}>
                            <div className="restaurant-image-container">
                                <img 
                                    src={viewrest.photograph} 
                                    alt={viewrest.name}
                                    className="restaurant-hero-image"
                                />
                                <div className="restaurant-overlay">
                                    <Badge bg="primary" className="cuisine-badge">
                                        <FontAwesomeIcon icon={faUtensils} /> {viewrest.cuisine_type}
                                    </Badge>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={12}>
                            <div className="restaurant-info">
                                <h1 className="restaurant-name">{viewrest.name}</h1>
                                <div className="restaurant-meta">
                                    <div className="meta-item">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="meta-icon" />
                                        <span>{viewrest.neighborhood}</span>
                                    </div>
                                    <div className="meta-item">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="meta-icon" />
                                        <span>{viewrest.address}</span>
                                    </div>
                                </div>
                                <div className="restaurant-description">
                                    <p>Experience the finest {viewrest.cuisine_type.toLowerCase()} cuisine in {viewrest.neighborhood}. 
                                    Our restaurant offers an authentic dining experience with carefully crafted dishes 
                                    and exceptional service.</p>
                                </div>
                                
                                {/* Quick Actions */}
                                <div className="quick-actions">
                                    <Button variant="primary" size="lg" className="action-btn">
                                        <FontAwesomeIcon icon={faPhone} /> Call Now
                                    </Button>
                                    <Button variant="outline-primary" size="lg" className="action-btn">
                                        <FontAwesomeIcon icon={faGlobe} /> Visit Website
                                    </Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

                {/* Restaurant Details */}
                <Row className="restaurant-details">
                    <Col lg={8} md={12}>
                        {/* Operating Hours */}
                        <Card className="detail-card">
                            <Card.Header className="card-header">
                                <h3><FontAwesomeIcon icon={faClock} /> Operating Hours</h3>
                            </Card.Header>
                            <Card.Body>
                                <Restoperation operate={viewrest.operating_hours} />
                            </Card.Body>
                        </Card>

                        {/* Reviews Section */}
                        <Card className="detail-card">
                            <Card.Header className="card-header">
                                <h3><FontAwesomeIcon icon={faStar} /> Customer Reviews</h3>
                                <Badge bg="success" className="review-count">
                                    {viewrest.reviews?.length || 0} Reviews
                                </Badge>
                            </Card.Header>
                            <Card.Body>
                                <Restreview reviews={viewrest.reviews} />
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={4} md={12}>
                        {/* Restaurant Stats */}
                        <Card className="detail-card stats-card">
                            <Card.Header className="card-header">
                                <h3>Restaurant Info</h3>
                            </Card.Header>
                            <Card.Body>
                                <div className="stat-item">
                                    <span className="stat-label">Cuisine Type</span>
                                    <span className="stat-value">{viewrest.cuisine_type}</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-label">Neighborhood</span>
                                    <span className="stat-value">{viewrest.neighborhood}</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-label">Total Reviews</span>
                                    <span className="stat-value">{viewrest.reviews?.length || 0}</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-label">Average Rating</span>
                                    <span className="stat-value">
                                        {viewrest.reviews && viewrest.reviews.length > 0 
                                            ? (viewrest.reviews.reduce((acc, review) => acc + review.rating, 0) / viewrest.reviews.length).toFixed(1)
                                            : 'N/A'
                                        }
                                    </span>
                                </div>
                            </Card.Body>
                        </Card>

                        {/* Location Info */}
                        <Card className="detail-card">
                            <Card.Header className="card-header">
                                <h3>Location</h3>
                            </Card.Header>
                            <Card.Body>
                                <div className="location-info">
                                    <p><strong>Address:</strong></p>
                                    <p>{viewrest.address}</p>
                                    {viewrest.latlng && (
                                        <div className="coordinates">
                                            <p><strong>Coordinates:</strong></p>
                                            <p>Lat: {viewrest.latlng.lat.toFixed(6)}</p>
                                            <p>Lng: {viewrest.latlng.lng.toFixed(6)}</p>
                                        </div>
                                    )}
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                {/* Call to Action */}
                <div className="cta-section">
                    <Card className="cta-card">
                        <Card.Body className="text-center">
                            <h3>Ready to Experience {viewrest.name}?</h3>
                            <p>Make a reservation or contact us to plan your visit.</p>
                            <div className="cta-buttons">
                                <Link to="/reservation">
                                    <Button variant="primary" size="lg" className="cta-btn">
                                        Make Reservation
                                    </Button>
                                </Link>
                                <Link to="/contact">
                                    <Button variant="outline-primary" size="lg" className="cta-btn">
                                        Contact Us
                                    </Button>
                                </Link>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </div>
    )
}

export default Viewrestaurant