import React from 'react'

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import LazyImage from './LazyImage'

function Restaurantcards({restaurant}) {
    console.log(restaurant);
  return (
    <Link style={{textDecoration:"none" ,  color:"white"}} to={`Viewrestaurant/${restaurant.id}`}>
    <Card className='m-4 card'>
    <div className='p-3'>
      <LazyImage src={restaurant.photograph} alt={restaurant.name} height={180} radius={12} />
    </div>
    <Card.Body>
      <Card.Title>{restaurant.name}</Card.Title>
      <Card.Text>
        {restaurant.neighborhood}
      </Card.Text>
      
    </Card.Body>
  </Card></Link>
  )
}

export default Restaurantcards