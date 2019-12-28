import { combineReducers } from 'redux';
import auth from './auth';
import navigation from './navigation';
import alerts from './alerts';
import layout from './layout';
import products from './products';
import register from './register';
import analytics from './analytics';
import chat from './chat';

export default combineReducers({
  alerts,
  auth,
  navigation,
  layout,
  products,
  register,
  analytics,
  chat
});
