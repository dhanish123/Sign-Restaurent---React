// import axios from "axios";
// export const RestaurantlistAction =()=> async()=>{
//    const result= await axios.get('/restaurants.json');
//    console.log(result.data.restaurants);
// }


import axios from "axios";
import { R_REQUEST, R_SUCCESS, R_FAILURE } from '../constants/restaurantConstants'

export const RestaurantlistAction = () => async (dispatch) => {
  try {
    dispatch({ type: R_REQUEST })
    const result = await axios.get("/restaurants.json");
    dispatch({
      type: R_SUCCESS,
      payload: result.data.restaurants
    })
  }
  catch (error) {
    dispatch({
      type: R_FAILURE,
      error: error?.message || 'Failed to load restaurants'
    })
  }
}