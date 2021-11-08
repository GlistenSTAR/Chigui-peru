import axios from 'axios';

import {
  CLEAR_ERRORS,
  GET_CARS,
  POST_LOADING,
} from './types';

// Get cars
export const getCars = () => dispatch => {
  dispatch(setPostLoading());
  axios
    .get('/api/cars')
    .then(res => {
      dispatch({
        type: GET_CARS,
        payload: res.data
      })
    }
    )
    .catch(err =>
      dispatch({
        type: GET_CARS,
        payload: null
      })
    );
};

// Set loading state
export const setPostLoading = () => {
  return {
    type: POST_LOADING
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
