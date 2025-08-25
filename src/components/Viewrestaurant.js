import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  { Image } from 'react-bootstrap';
import Restoperation from './Restoperation';
import Restreview from './Restreview';
import Loader from './Loader'
import ErrorMessage from './ErrorMessage'
function Viewrestaurant() {
    const params=useParams()
    console.log(params.id);
     // to hold values
     const[allRestaurants,setRestaurants]=useState([])
     const[loading,setLoading]=useState(false)
     const[error,setError]=useState(null)
     // function to call api to get all restaurent  items from restaurent.json
 
     const getRestaurants=async()=>{
        try{
          setLoading(true)
          const res = await fetch('/restaurants.json')
          const data = await res.json()
          setRestaurants(data.restaurants)
        }catch(err){
          setError(err?.message || 'Failed to load restaurant')
        }finally{
          setLoading(false)
        }
     }
      console.log(allRestaurants);
 
     useEffect(()=>{
         getRestaurants()
     },[])
     console.log(allRestaurants);

     const viewrest=allRestaurants.find(item=>item.id==params.id)
     console.log(viewrest);
  return (
    <div className='container-responsive'>
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {!loading && !error && viewrest && (
        <Row>
          <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
            <Image src={viewrest.photograph} className='detail-image-cover' />
          </Col>
          <Col>
            <h3>Name:{viewrest.name}</h3>
            <h4>Neighborhood:{viewrest.neighborhood}</h4>
            <h5>Address:{viewrest.address}</h5>
            <h5>Cuisine_type:{viewrest.cuisine_type}</h5>
            <Restoperation operate={viewrest.operating_hours}/>
            <br/>
            <br/>
            <Restreview reviews={viewrest.reviews}/>
          </Col>
        </Row>
      )}
    </div>
   
  )
}

export default Viewrestaurant