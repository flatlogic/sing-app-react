import { combineReducers } from 'redux';
import auth from './auth';
import navigation from './navigation';
import alerts from './alerts';
import layout from './layout';
import products from './products';
import register from './register';

export default combineReducers({
  alerts,
  auth,
  navigation,
  layout,
  products,
  register,
});
