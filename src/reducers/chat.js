import {
  SET_ACTIVE_USER,
  NEW_MESSAGE_SUCCESS,
  NEW_MESSAGE_REQUEST
} from '../actions/chat';
import {user, groups, users} from '../pages/chat/mock';

const defaultState = {
  user,
  groups,
  users,
  activeChatUser: users[0],
  sendingMessage: false,
};

export default function chatReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_ACTIVE_USER:
      console.log('set active user')
      return state
    case NEW_MESSAGE_SUCCESS:
      console.log('new message success')
      return state
    case NEW_MESSAGE_REQUEST:
      console.log('message request')
      return state
    default:
      return state;
  }
}
