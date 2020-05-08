import list from 'reducers/usersListReducers';
import form from 'reducers/usersFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
