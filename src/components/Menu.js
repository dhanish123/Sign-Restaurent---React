import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form, Badge, InputGroup } from 'react-bootstrap';
import './Menu.css';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  const categories = [
    { id: 'all', name: 'All Items', icon: '🍽️' },
    { id: 'appetizers', name: 'Appetizers', icon: '🥗' },
    { id: 'main-courses', name: 'Main Courses', icon: '🍖' },
    { id: 'seafood', name: 'Seafood', icon: '🐟' },
    { id: 'vegetarian', name: 'Vegetarian', icon: '🥬' },
    { id: 'desserts', name: 'Desserts', icon: '🍰' },
    { id: 'beverages', name: 'Beverages', icon: '🥤' }
  ];

  useEffect(() => {
    // Simulate fetching menu items
    const mockMenuItems = [
      {
        id: 1,
        name: "Truffle Arancini",
        category: "appetizers",
        price: 12.99,
        description: "Crispy risotto balls with truffle aioli",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400",
        spicy: false,
        vegetarian: true,
        popular: true
      },
      {
        id: 2,
        name: "Wagyu Beef Burger",
        category: "main-courses",
        price: 24.99,
        description: "Premium wagyu beef with caramelized onions",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400",
        spicy: false,
        vegetarian: false,
        popular: true
      },
      {
        id: 3,
        name: "Grilled Salmon",
        category: "seafood",
        price: 28.99,
        description: "Atlantic salmon with herb butter sauce",
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400",
        spicy: false,
        vegetarian: false,
        popular: false
      },
      {
        id: 4,
        name: "Spicy Pad Thai",
        category: "main-courses",
        price: 18.99,
        description: "Traditional Thai noodles with shrimp",
        image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400",
        spicy: true,
        vegetarian: false,
        popular: true
      },
      {
        id: 5,
        name: "Quinoa Buddha Bowl",
        category: "vegetarian",
        price: 16.99,
        description: "Fresh vegetables with quinoa and tahini dressing",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400",
        spicy: false,
        vegetarian: true,
        popular: false
      },
      {
        id: 6,
        name: "Chocolate Lava Cake",
        category: "desserts",
        price: 9.99,
        description: "Warm chocolate cake with vanilla ice cream",
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400",
        spicy: false,
        vegetarian: true,
        popular: true
      },
      {
        id: 7,
        name: "Craft Cocktail",
        category: "beverages",
        price: 14.99,
        description: "House-made cocktail with premium spirits",
        image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=400",
        spicy: false,
        vegetarian: true,
        popular: false
      },
      {
        id: 8,
        name: "Bruschetta",
        category: "appetizers",
        price: 8.99,
        description: "Toasted bread with fresh tomatoes and basil",
        image: "https://images.unsplash.com/photo-1572445271230-a78b5944a659?w=400",
        spicy: false,
        vegetarian: true,
        popular: false
      }
    ];

    setMenuItems(mockMenuItems);
    setFilteredItems(mockMenuItems);
    setLoading(false);
  }, []);

  useEffect(() => {
    let filtered = menuItems;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredItems(filtered);
  }, [selectedCategory, searchTerm, menuItems]);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  if (loading) {
    return (
      <Container className="py-5">
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </Container>
    );
  }

  return (
    <div className="menu-page">
      <Container className="py-5">
        {/* Header */}
        <Row className="mb-5">
          <Col className="text-center">
            <h1 className="menu-title">Our Menu</h1>
            <p className="menu-subtitle">Discover our carefully crafted dishes made with the finest ingredients</p>
          </Col>
        </Row>

        {/* Search Bar */}
        <Row className="mb-4">
          <Col lg={6} className="mx-auto">
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Search for dishes..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="search-input"
              />
              <Button variant="outline-secondary">
                <i className="fas fa-search"></i>
              </Button>
            </InputGroup>
          </Col>
        </Row>

        {/* Category Filter */}
        <Row className="mb-5">
          <Col>
            <div className="category-filter">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "primary" : "outline-primary"}
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

        {/* Menu Items */}
        <Row>
          {filteredItems.length === 0 ? (
            <Col className="text-center">
              <div className="no-results">
                <i className="fas fa-search fa-3x text-muted mb-3"></i>
                <h4>No items found</h4>
                <p>Try adjusting your search or category filter</p>
              </div>
            </Col>
          ) : (
            filteredItems.map((item) => (
              <Col key={item.id} lg={4} md={6} className="mb-4">
                <Card className="menu-card h-100">
                  <div className="card-img-wrapper">
                    <Card.Img variant="top" src={item.image} className="menu-card-img" />
                    {item.popular && (
                      <Badge bg="warning" className="popular-badge">
                        Popular
                      </Badge>
                    )}
                    {item.spicy && (
                      <Badge bg="danger" className="spicy-badge">
                        Spicy
                      </Badge>
                    )}
                  </div>
                  <Card.Body className="d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <Card.Title className="menu-item-title">{item.name}</Card.Title>
                      <span className="menu-item-price">${item.price}</span>
                    </div>
                    <Card.Text className="menu-item-description">
                      {item.description}
                    </Card.Text>
                    <div className="menu-item-badges mt-auto">
                      {item.vegetarian && (
                        <Badge bg="success" className="me-2">
                          Vegetarian
                        </Badge>
                      )}
                      <Badge bg="info">
                        {categories.find(cat => cat.id === item.category)?.name}
                      </Badge>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          )}
        </Row>

        {/* Call to Action */}
        <Row className="mt-5">
          <Col className="text-center">
            <div className="menu-cta">
              <h3>Ready to Order?</h3>
              <p>Make a reservation or call us to place your order</p>
              <div className="cta-buttons">
                <Button variant="primary" size="lg" className="me-3">
                  Make Reservation
                </Button>
                <Button variant="outline-primary" size="lg">
                  Call Now
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Menu;
