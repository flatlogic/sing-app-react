import { combineReducers } from 'redux';
import auth from './auth';
import navigation from './navigation';

export default combineReducers({
  auth,
  navigation,
});
