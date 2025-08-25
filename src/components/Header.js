import React, { useState } from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleNavClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar 
      bg="dark" 
      variant="dark" 
      expand="lg" 
      className="custom-navbar"
      expanded={expanded}
      onToggle={(expanded) => setExpanded(expanded)}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand">
          <img
            alt="Restaurant Logo"
            src="https://static.vecteezy.com/system/resources/previews/000/274/987/original/vector-restaurant-label-food-service-logo.jpg"
            width="50"
            height="50"
            className="d-inline-block align-top"
          />
          <span className="brand-text">Sign Restaurant</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={Link} 
              to="/" 
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
              onClick={handleNavClick}
            >
              Home
            </Nav.Link>
            
            <Nav.Link 
              as={Link} 
              to="/restaurants" 
              className={`nav-link ${isActive('/restaurants') ? 'active' : ''}`}
              onClick={handleNavClick}
            >
              Restaurants
            </Nav.Link>
            
            <Nav.Link 
              as={Link} 
              to="/menu" 
              className={`nav-link ${isActive('/menu') ? 'active' : ''}`}
              onClick={handleNavClick}
            >
              Menu
            </Nav.Link>
            
            <NavDropdown 
              title="More" 
              id="basic-nav-dropdown"
              className="nav-dropdown"
            >
              <NavDropdown.Item 
                as={Link} 
                to="/about" 
                onClick={handleNavClick}
              >
                About Us
              </NavDropdown.Item>
              <NavDropdown.Item 
                as={Link} 
                to="/gallery" 
                onClick={handleNavClick}
              >
                Gallery
              </NavDropdown.Item>
              <NavDropdown.Item 
                as={Link} 
                to="/blog" 
                onClick={handleNavClick}
              >
                Blog & News
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item 
                as={Link} 
                to="/reservation" 
                onClick={handleNavClick}
              >
                Make Reservation
              </NavDropdown.Item>
              <NavDropdown.Item 
                as={Link} 
                to="/contact" 
                onClick={handleNavClick}
              >
                Contact Us
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;