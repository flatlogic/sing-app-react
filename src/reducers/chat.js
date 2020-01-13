import {
  NEW_MESSAGE_SUCCESS,
  NEW_MESSAGE_REQUEST,
  SET_ACTIVE_CHAT,
  CHANGE_MOBILE_STATE
} from '../actions/chat';
import {user, users, chats} from '../pages/chat/mock';

export const MobileChatStates = {
  LIST: 'list',
  CHAT: 'chat',
  INFO: 'info'
};

Object.freeze(MobileChatStates);

const defaultState = {
  user,
  users,
  chats,
  activeChatId: chats[3].id,
  sendingMessage: false,
  mobileState: MobileChatStates.CHAT
};

export default function chatReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_ACTIVE_CHAT:
      return {
        ...state, 
        activeChatId : chats.find(chat => chat.id === action.payload).id
      }
    case NEW_MESSAGE_SUCCESS:
      let chatsCopy = chats;
      let chat = chatsCopy.find(chat => chat.id === state.activeChatId);
      chat.messages.push(action.payload.message);
      return {
        ...state,
        sendingMessage: false,
        chats: chatsCopy
      }
    case NEW_MESSAGE_REQUEST:
      return {
        ...state,
        sendingMessage: true
      }
    case CHANGE_MOBILE_STATE:
      let defaultId = state.activeChatId;
      return {
        ...state,
        mobileState: action.payload,
        activeChatId: action.payload === MobileChatStates.LIST ? null : defaultId
      }
    default:
      return state;
  }
}
