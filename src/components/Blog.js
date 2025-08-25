import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form, Badge, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Blog.css';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  const categories = [
    { id: 'all', name: 'All Posts', icon: '📰' },
    { id: 'news', name: 'Restaurant News', icon: '📢' },
    { id: 'recipes', name: 'Recipes & Tips', icon: '👨‍🍳' },
    { id: 'events', name: 'Events', icon: '🎉' },
    { id: 'reviews', name: 'Reviews', icon: '⭐' },
    { id: 'lifestyle', name: 'Food & Lifestyle', icon: '🍽️' }
  ];

  useEffect(() => {
    // Simulate fetching blog posts
    const mockBlogPosts = [
      {
        id: 1,
        title: "New Seasonal Menu Launch",
        excerpt: "Discover our latest seasonal menu featuring fresh, locally-sourced ingredients and innovative culinary techniques.",
        content: "We're excited to announce the launch of our new seasonal menu, crafted with the finest ingredients sourced from local farmers and producers. Our executive chef has created a collection of dishes that celebrate the flavors of the season while maintaining our commitment to culinary excellence.",
        category: "news",
        author: "Chef Maria Rodriguez",
        date: "2024-01-15",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600",
        readTime: "3 min read",
        featured: true
      },
      {
        id: 2,
        title: "The Art of Wine Pairing",
        excerpt: "Learn the secrets of perfect wine pairing from our expert sommelier.",
        content: "Wine pairing is both an art and a science. Our expert sommelier shares insights into how to choose the perfect wine to complement your meal, from understanding flavor profiles to considering regional pairings.",
        category: "lifestyle",
        author: "Sommelier James Wilson",
        date: "2024-01-12",
        image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600",
        readTime: "5 min read",
        featured: false
      },
      {
        id: 3,
        title: "Homemade Pasta Recipe",
        excerpt: "Master the art of making fresh pasta at home with our step-by-step guide.",
        content: "There's nothing quite like fresh, homemade pasta. In this comprehensive guide, we'll walk you through the process of creating perfect pasta dough, from selecting the right flour to mastering the rolling technique.",
        category: "recipes",
        author: "Chef David Chen",
        date: "2024-01-10",
        image: "https://images.unsplash.com/photo-1559314809834-ef04bbd61622?w=600",
        readTime: "8 min read",
        featured: false
      },
      {
        id: 4,
        title: "Valentine's Day Special Events",
        excerpt: "Plan the perfect romantic evening with our special Valentine's Day dining experience.",
        content: "This Valentine's Day, we're offering an exclusive dining experience designed to create unforgettable memories. From intimate table settings to specially curated menus, discover how we're making this romantic occasion extra special.",
        category: "events",
        author: "Events Manager Sarah Johnson",
        date: "2024-01-08",
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600",
        readTime: "4 min read",
        featured: true
      },
      {
        id: 5,
        title: "Customer Spotlight: Anniversary Celebration",
        excerpt: "Read about how we helped create a memorable 25th anniversary celebration.",
        content: "When the Smith family approached us to plan their 25th anniversary celebration, we knew we had to create something truly special. From personalized menus to custom decorations, here's how we made their milestone celebration unforgettable.",
        category: "reviews",
        author: "Marketing Team",
        date: "2024-01-05",
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600",
        readTime: "6 min read",
        featured: false
      },
      {
        id: 6,
        title: "Sustainable Dining Practices",
        excerpt: "Learn about our commitment to sustainability and eco-friendly dining practices.",
        content: "Sustainability is at the heart of everything we do. From sourcing ingredients to managing waste, discover how we're working to reduce our environmental impact while maintaining the highest standards of culinary excellence.",
        category: "lifestyle",
        author: "Sustainability Manager",
        date: "2024-01-03",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600",
        readTime: "7 min read",
        featured: false
      }
    ];

    setBlogPosts(mockBlogPosts);
    setFilteredPosts(mockBlogPosts);
    setLoading(false);
  }, []);

  useEffect(() => {
    let filtered = blogPosts;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredPosts(filtered);
  }, [selectedCategory, searchTerm, blogPosts]);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
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
    <div className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="hero-overlay">
          <Container>
            <Row className="align-items-center min-vh-50">
              <Col className="text-center text-white">
                <h1 className="blog-title">Blog & News</h1>
                <p className="blog-subtitle">
                  Stay updated with the latest culinary trends, recipes, and restaurant news
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <Container className="py-5">
        {/* Search and Filter */}
        <Row className="mb-5">
          <Col lg={6} className="mb-3">
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="search-input"
              />
              <Button variant="outline-secondary">
                <i className="fas fa-search"></i>
              </Button>
            </InputGroup>
          </Col>
          <Col lg={6}>
            <div className="category-filter">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "primary" : "outline-primary"}
                  size="sm"
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

        {/* Featured Posts */}
        {filteredPosts.filter(post => post.featured).length > 0 && (
          <Row className="mb-5">
            <Col>
              <h2 className="section-title">Featured Articles</h2>
            </Col>
          </Row>
        )}

        <Row className="mb-5">
          {filteredPosts
            .filter(post => post.featured)
            .map((post) => (
              <Col key={post.id} lg={6} className="mb-4">
                <Card className="featured-post-card h-100">
                  <div className="card-img-wrapper">
                    <Card.Img variant="top" src={post.image} className="featured-post-img" />
                    <Badge bg="warning" className="featured-badge">
                      Featured
                    </Badge>
                  </div>
                  <Card.Body className="d-flex flex-column">
                    <div className="post-meta mb-2">
                      <Badge bg="primary" className="me-2">
                        {categories.find(cat => cat.id === post.category)?.name}
                      </Badge>
                      <span className="post-date">{formatDate(post.date)}</span>
                    </div>
                    <Card.Title className="post-title">{post.title}</Card.Title>
                    <Card.Text className="post-excerpt">{post.excerpt}</Card.Text>
                    <div className="post-footer mt-auto">
                      <div className="post-author">
                        <i className="fas fa-user me-2"></i>
                        {post.author}
                      </div>
                      <div className="post-read-time">
                        <i className="fas fa-clock me-2"></i>
                        {post.readTime}
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>

        {/* All Posts */}
        <Row className="mb-5">
          <Col>
            <h2 className="section-title">Latest Articles</h2>
          </Col>
        </Row>

        <Row>
          {filteredPosts.length === 0 ? (
            <Col className="text-center">
              <div className="no-results">
                <i className="fas fa-search fa-3x text-muted mb-3"></i>
                <h4>No articles found</h4>
                <p>Try adjusting your search or category filter</p>
              </div>
            </Col>
          ) : (
            filteredPosts
              .filter(post => !post.featured)
              .map((post) => (
                <Col key={post.id} lg={4} md={6} className="mb-4">
                  <Card className="blog-post-card h-100">
                    <div className="card-img-wrapper">
                      <Card.Img variant="top" src={post.image} className="blog-post-img" />
                    </div>
                    <Card.Body className="d-flex flex-column">
                      <div className="post-meta mb-2">
                        <Badge bg="primary" className="me-2">
                          {categories.find(cat => cat.id === post.category)?.name}
                        </Badge>
                        <span className="post-date">{formatDate(post.date)}</span>
                      </div>
                      <Card.Title className="post-title">{post.title}</Card.Title>
                      <Card.Text className="post-excerpt">{post.excerpt}</Card.Text>
                      <div className="post-footer mt-auto">
                        <div className="post-author">
                          <i className="fas fa-user me-2"></i>
                          {post.author}
                        </div>
                        <div className="post-read-time">
                          <i className="fas fa-clock me-2"></i>
                          {post.readTime}
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))
          )}
        </Row>

        {/* Newsletter Signup */}
        <Row className="mt-5">
          <Col>
            <Card className="newsletter-card">
              <Card.Body className="text-center p-5">
                <h3>Stay Updated</h3>
                <p className="lead">Subscribe to our newsletter for the latest culinary news and exclusive offers</p>
                <Row className="justify-content-center">
                  <Col md={6}>
                    <InputGroup>
                      <Form.Control
                        type="email"
                        placeholder="Enter your email address"
                        className="newsletter-input"
                      />
                      <Button variant="primary">
                        Subscribe
                      </Button>
                    </InputGroup>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Blog;
