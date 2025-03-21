import { all } from 'redux-saga/effects';

import cart from './cart/sagas';
import config from './config/sagas';
import homeData from './home/sagas';
import product from './product/sagas';
import profile from './profile/sagas';
import showcase from './showcase/sagas';

export default function* rootSaga() {
  return yield all([cart, product, showcase, profile, config, homeData]);
}
