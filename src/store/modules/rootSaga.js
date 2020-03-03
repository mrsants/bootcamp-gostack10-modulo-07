import { all } from 'redux-saga/effects';

import cart from './cart/sagas';

export default function* rootSafa() {
  return yield all([cart]);
}
