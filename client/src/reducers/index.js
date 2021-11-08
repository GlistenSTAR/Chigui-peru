import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import carReducer from './carReducer';
import serivceReducer from './servicesReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  car: carReducer,
  serivce: serivceReducer
});
