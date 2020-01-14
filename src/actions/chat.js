import moment from 'moment';
import { MobileChatStates } from '../reducers/chat';

export const CHANGE_MOBILE_STATE = 'CHANGE_MOBILE_STATE';
export const NEW_MESSAGE_SUCCESS = 'NEW_MESSAGE_SUCCESS';
export const NEW_MESSAGE_REQUEST = 'NEW_MESSAGE_REQUEST';
export const SET_ACTIVE_CHAT = 'SET_ACTIVE_CHAT';
export const OPEN_USERS_LIST = 'OPEN_USERS_LIST';

export function changeMobileState(payload) {
  return {
    type: CHANGE_MOBILE_STATE,
    payload
  }
}

export function openUsersList() {
  return {
    type: OPEN_USERS_LIST
  }
}

export function newMessageRequest(payload) {
  return (dispatch) => {
    if (!payload.message) return;
    dispatch({ type: NEW_MESSAGE_REQUEST })
    setTimeout(() => {
      let message = {
        id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
        text: payload.message,
        timestamp: moment(),
        userId: 1, 
        owner: true
      };
      dispatch(newMessageSuccess({dialogId: payload.dialogId, message}))
    }, 1000)
  }
}

export function newMessageSuccess(payload) {
  return {
    type: NEW_MESSAGE_SUCCESS,
    payload
  }
}

export function setActiveChat(payload) {
  return (dispatch) => {
    dispatch({
      type: SET_ACTIVE_CHAT,
      payload
    })
    dispatch(changeMobileState(MobileChatStates.CHAT));
  }
}