import {
  SET_ACTIVE_USER,
  NEW_MESSAGE_SUCCESS,
  NEW_MESSAGE_REQUEST,
  SET_ACTIVE_CHAT
} from '../actions/chat';
import {user, users, chats} from '../pages/chat/mock';

const defaultState = {
  user,
  users,
  chats,
  activeChatId: chats[3].id,
  sendingMessage: false,
};

export default function chatReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_ACTIVE_CHAT:
      return {
        ...state, 
        activeChatId : chats.find(chat => chat.id === action.payload).id
      }
    case NEW_MESSAGE_SUCCESS:
      let chat = chats.find(chat => chat.id === state.activeChatId);
      chat.messages.push(action.payload.message);
      return {
        ...state,
        sendingMessage: false
      }
    case NEW_MESSAGE_REQUEST:
      return {
        ...state,
        sendingMessage: true
      }
    default:
      return state;
  }
}
