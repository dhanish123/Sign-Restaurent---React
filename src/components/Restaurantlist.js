import { useEffect, useState } from 'react'
import React from 'react'
import Restaurantcards from './Restaurantcards'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RestaurantlistAction } from '../Actions/RestaurantlistAction';
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import ErrorMessage from './ErrorMessage'
function Restaurantlist() {
  // to hold values
  const [allRestaurants, setRestaurants] = useState([])
  // function to call api to get all restaurent  items from restaurent.json

  // const getRestaurants = async () => {
  //   await fetch('/restaurants.json')
  //     .then((data) => {
  //       data.json()
  //         .then((result) => {
  //           setRestaurants(result.restaurants);// to converrt array of object array
  //           // console.log(result);
  //         })

  //     })
  // }
  // console.log(allRestaurants);

  const dispatch = useDispatch();
  const result=useSelector(state=>state.restaurantReducer)
  console.log(result);
  const {restaurantList, loading, error}=result
  useEffect(() => {
    // getRestaurants()
    dispatch(RestaurantlistAction());
  }, [])
  return (
    <div className='container-responsive'>
      {loading && (
        <div style={{ display: 'flex', justifyContent: 'center', padding: 24 }}>
          <Loader />
        </div>
      )}
      {error && (
        <ErrorMessage message={String(error)} />
      )}
      {!loading && !error && (
        <Row>
          {restaurantList.map(item => (
            <Col key={item.id} sm={12} md={6} lg={4} xl={3}>
              <Restaurantcards restaurant={item} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  )
}

export default Restaurantlist