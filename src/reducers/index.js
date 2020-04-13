import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import locations from './locations';

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    locations: locations,
  });

export default createRootReducer;
