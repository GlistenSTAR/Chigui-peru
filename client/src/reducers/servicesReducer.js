import { 
  GET_SERVICES 
} from '../actions/types';

const initialState = {
  services : {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SERVICES:{
      return {
        ...state,
        services: action.payload
      };
    }
      
    default:
      return state;
  }
}
