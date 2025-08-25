import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import './Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Photos', icon: '📸' },
    { id: 'food', name: 'Food & Dishes', icon: '🍽️' },
    { id: 'interior', name: 'Restaurant Interior', icon: '🏠' },
    { id: 'events', name: 'Events & Celebrations', icon: '🎉' },
    { id: 'team', name: 'Our Team', icon: '👨‍🍳' }
  ];

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600',
      alt: 'Gourmet Pasta Dish',
      category: 'food',
      title: 'Truffle Arancini',
      description: 'Crispy risotto balls with truffle aioli'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600',
      alt: 'Restaurant Interior',
      category: 'interior',
      title: 'Elegant Dining Room',
      description: 'Our sophisticated dining atmosphere'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600',
      alt: 'Wagyu Burger',
      category: 'food',
      title: 'Wagyu Beef Burger',
      description: 'Premium wagyu beef with caramelized onions'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600',
      alt: 'Grilled Salmon',
      category: 'food',
      title: 'Grilled Salmon',
      description: 'Atlantic salmon with herb butter sauce'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=600',
      alt: 'Pad Thai',
      category: 'food',
      title: 'Spicy Pad Thai',
      description: 'Traditional Thai noodles with shrimp'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600',
      alt: 'Buddha Bowl',
      category: 'food',
      title: 'Quinoa Buddha Bowl',
      description: 'Fresh vegetables with quinoa and tahini dressing'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600',
      alt: 'Chocolate Cake',
      category: 'food',
      title: 'Chocolate Lava Cake',
      description: 'Warm chocolate cake with vanilla ice cream'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600',
      alt: 'Craft Cocktail',
      category: 'food',
      title: 'Craft Cocktail',
      description: 'House-made cocktail with premium spirits'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1572445271230-a78b5944a659?w=600',
      alt: 'Bruschetta',
      category: 'food',
      title: 'Bruschetta',
      description: 'Toasted bread with fresh tomatoes and basil'
    },
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600',
      alt: 'Restaurant Bar',
      category: 'interior',
      title: 'Cozy Bar Area',
      description: 'Perfect spot for pre-dinner drinks'
    },
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600',
      alt: 'Dining Area',
      category: 'interior',
      title: 'Main Dining Hall',
      description: 'Spacious and elegant dining space'
    },
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600',
      alt: 'Chef in Kitchen',
      category: 'team',
      title: 'Chef Maria Rodriguez',
      description: 'Our Executive Chef at work'
    },
    {
      id: 13,
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600',
      alt: 'Sous Chef',
      category: 'team',
      title: 'Chef David Chen',
      description: 'Sous Chef preparing Asian fusion dishes'
    },
    {
      id: 14,
      src: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=600',
      alt: 'Pastry Chef',
      category: 'team',
      title: 'Chef Sarah Johnson',
      description: 'Pastry Chef creating dessert masterpieces'
    },
    {
      id: 15,
      src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600',
      alt: 'Birthday Celebration',
      category: 'events',
      title: 'Birthday Celebrations',
      description: 'Making special moments unforgettable'
    },
    {
      id: 16,
      src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600',
      alt: 'Anniversary Dinner',
      category: 'events',
      title: 'Anniversary Dinners',
      description: 'Romantic settings for special occasions'
    }
  ];

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeCategory);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
  };

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="hero-overlay">
          <Container>
            <Row className="align-items-center min-vh-50">
              <Col className="text-center text-white">
                <h1 className="gallery-title">Photo Gallery</h1>
                <p className="gallery-subtitle">
                  Take a visual journey through our restaurant, dishes, and memorable moments
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <Container className="py-5">
        {/* Category Filter */}
        <Row className="mb-5">
          <Col>
            <div className="category-filter">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "primary" : "outline-primary"}
                  className="category-btn"
                  onClick={() => handleCategoryClick(category.id)}
                >
                  <span className="category-icon">{category.icon}</span>
                  {category.name}
                </Button>
              ))}
            </div>
          </Col>
        </Row>

        {/* Gallery Grid */}
        <Row>
          {filteredImages.map((image) => (
            <Col key={image.id} lg={4} md={6} className="mb-4">
              <Card className="gallery-card" onClick={() => handleImageClick(image)}>
                <div className="gallery-image-wrapper">
                  <Card.Img variant="top" src={image.src} alt={image.alt} className="gallery-image" />
                  <div className="gallery-overlay">
                    <div className="overlay-content">
                      <h5 className="image-title">{image.title}</h5>
                      <p className="image-description">{image.description}</p>
                      <Button variant="light" size="sm">
                        <i className="fas fa-search"></i> View
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        {/* No Results */}
        {filteredImages.length === 0 && (
          <Row>
            <Col className="text-center">
              <div className="no-results">
                <i className="fas fa-images fa-3x text-muted mb-3"></i>
                <h4>No images found</h4>
                <p>Try selecting a different category</p>
              </div>
            </Col>
          </Row>
        )}

        {/* Gallery Stats */}
        <Row className="mt-5">
          <Col className="text-center">
            <div className="gallery-stats">
              <div className="stat-item">
                <h3>{galleryImages.length}</h3>
                <p>Total Photos</p>
              </div>
              <div className="stat-item">
                <h3>{categories.length - 1}</h3>
                <p>Categories</p>
              </div>
              <div className="stat-item">
                <h3>100%</h3>
                <p>Quality</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Lightbox Modal */}
      <Modal 
        show={showModal} 
        onHide={handleCloseModal} 
        size="lg"
        centered
        className="gallery-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>{selectedImage?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          {selectedImage && (
            <div className="modal-image-container">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                className="modal-image"
              />
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <p className="modal-description">{selectedImage?.description}</p>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Gallery;
