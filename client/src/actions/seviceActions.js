import axios from 'axios';

import {
  GET_SERVICES,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  GET_ERRORS,
} from './types';

// get services
export const getServices = () => dispatch => {
  axios
    .get('/api/service/total_diagonse')
    .then(res => 
      dispatch({
        type: GET_SERVICES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Profile loading
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};

// Clear profile
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};
