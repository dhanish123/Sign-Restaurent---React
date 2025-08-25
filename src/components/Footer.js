import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Footer() {
  return (
    <div> <Card className="text-center" style={{ background: 'transparent', border: 'none', color: 'var(--color-muted)' }}>
    <Card.Body>
      <Card.Text>
        © {new Date().getFullYear()} Sign Restaurant. All rights reserved.
      </Card.Text>
    </Card.Body>
  </Card></div>
  )
}

export default Footer