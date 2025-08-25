import { R_REQUEST, R_SUCCESS, R_FAILURE } from '../constants/restaurantConstants'

const initialState = {
    restaurantList: [],
    loading: false,
    error: null
}

export const restaurantListReducer = (state = initialState, action) => {
    switch (action.type) {
        case R_REQUEST:
            return { ...state, loading: true, error: null }
        case R_SUCCESS:
            return { ...state, loading: false, restaurantList: action.payload }
        case R_FAILURE:
            return { ...state, loading: false, error: action.error }
        default:
            return state
    }
}