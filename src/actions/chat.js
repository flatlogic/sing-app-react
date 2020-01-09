import moment from 'moment';

export const SET_ACTIVE_USER = 'SET_ACTIVE_USER';
export const NEW_MESSAGE_SUCCESS = 'NEW_MESSAGE_SUCCESS';
export const NEW_MESSAGE_REQUEST = 'NEW_MESSAGE_REQUEST';
export const SET_ACTIVE_CHAT = 'SET_ACTIVE_CHAT';

export function setActiveUser(payload) {
  return {
    type: SET_ACTIVE_USER,
    payload
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
  return {
    type: SET_ACTIVE_CHAT,
    payload
  }
}