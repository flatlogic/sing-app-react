import list from './usersListReducers';
import form from './usersFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
