import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div> <Navbar bg="dark" variant="dark" style={{ background: 'transparent', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
    <Container>
      <Navbar.Brand href="/">
        <img
          alt=""
          src="https://static.vecteezy.com/system/resources/previews/000/274/987/original/vector-restaurant-label-food-service-logo.jpg"
          width="50"
          height="50"
          className="d-inline-block align-top"
        />{' '}
       Sign Restaurant
      </Navbar.Brand>
    </Container>
  </Navbar></div>
  )
}

export default Header