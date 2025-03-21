import { combineReducers } from 'redux';

import cart from './cart/reducer';
import config from './config/reducer';
import homeData from './home/reducer';
import product from './product/reducer';
import profile from './profile/reducer';
import showcase from './showcase/reducer';

export default combineReducers({
  cart,
  product,
  showcase,
  profile,
  config,
  homeData,
});
