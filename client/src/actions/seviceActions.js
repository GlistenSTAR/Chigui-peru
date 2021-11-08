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

export const saveServices = (seviceData, history) => dispatch => {
  console.log(seviceData);
  axios.post('/api/service/save_quote', seviceData)
    .then(res => {
      console.log(res.data.success);
      if (res.data.success === true) {
        history.push('/');
      } else {
        dispatch({
          type: GET_ERRORS,
          payload: res.data.errors
        })
      }
    })
    .catch(err =>
      console.log(err)
    );
}

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
