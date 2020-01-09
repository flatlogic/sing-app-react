import {
  SET_ACTIVE_USER,
  NEW_MESSAGE_SUCCESS,
  NEW_MESSAGE_REQUEST,
  SET_ACTIVE_CHAT
} from '../actions/chat';
import {user, groups, users, chats} from '../pages/chat/mock';

const defaultState = {
  user,
  groups,
  users,
  activeChatUser: users[0],
  activeChatGroup: groups[0],
  sendingMessage: false,
};

export default function chatReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_ACTIVE_USER:
      return {
        ...state, 
        activeChatUser: users.find(u => u.id === action.payload)
      }
    case NEW_MESSAGE_SUCCESS:
      let dialog = user.dialogs.find(d => d.id === action.payload.dialogId);
      dialog.messages.push(action.payload.message);
      return {
        ...state,
        sendingMessage: false
      }
    case NEW_MESSAGE_REQUEST:
      return {
        ...state,
        sendingMessage: true
      }
    case SET_ACTIVE_CHAT:
      return {
        ...state, 
        activeChatGroup: groups.find(g => g.id === action.payload)
      }
    default:
      return state;
  }
}
