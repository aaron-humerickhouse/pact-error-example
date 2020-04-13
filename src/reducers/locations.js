import { GET_LOCATIONS_FAILURE, GET_LOCATIONS_STARTED, GET_LOCATIONS_SUCCESS } from '../actions/locations';

export default function locations(state = {}, action) {
  switch (action.type) {
    case GET_LOCATIONS_STARTED:
      return { ...state, loading: true };
    case GET_LOCATIONS_SUCCESS:
      return { ...state, ...action.payload, loading: false, error: null };
    case GET_LOCATIONS_FAILURE:
      return { ...state, loading: false, error: action.payload.errorMessage };
    default:
      return state;
  }
}
