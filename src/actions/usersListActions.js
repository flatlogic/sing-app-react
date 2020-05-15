import Errors from 'components/FormItems/error/errors';
import axios from 'axios';
import config from '../config';
import { mockUser } from '../actions/mock';

async function list() {
  const response = await axios.get(`/users`);
  return response.data;
}

const actions = {

  doFetch: (filter, keepPagination = false) => async (dispatch) => {
    if (!config.isBackend) {
      dispatch({
        type: 'USERS_LIST_FETCH_SUCCESS',
        payload: {
          rows: [mockUser],
          count: 1,
        },
      });
    } else {
      try {
        dispatch({
          type: 'USERS_LIST_FETCH_STARTED',
          payload: { filter, keepPagination },
        });

        const response = await list();

        dispatch({
          type: 'USERS_LIST_FETCH_SUCCESS',
          payload: {
            rows: response.rows,
            count: response.count,
          },
        });
      } catch (error) {
        Errors.handle(error);

        dispatch({
          type: 'USERS_LIST_FETCH_ERROR',
        });
      }
    }
  },

  doDelete: (id) => async (dispatch) => {
    if (!config.isBackend) {
      dispatch({
        type: 'USERS_LIST_DELETE_ERROR',
      });
    } else {
      try {
        dispatch({
          type: 'USERS_LIST_DELETE_STARTED',
        });
  
        await axios.delete(`/users/${id}`)
  
        dispatch({
          type: 'USERS_LIST_DELETE_SUCCESS',
        });
  
        const response = await list();
        dispatch({
          type: 'USERS_LIST_FETCH_SUCCESS',
          payload: {
            rows: response.rows,
            count: response.count,
          },
        });
  
      } catch (error) {
        Errors.handle(error);
  
        dispatch({
          type: 'USERS_LIST_DELETE_ERROR',
        });
      }
    }
  },
  doOpenConfirm: (id) => async (dispatch) => {
      dispatch({
        type: 'USERS_LIST_OPEN_CONFIRM',
        payload: {
          id: id
        },
      });
  },
  doCloseConfirm: () => async (dispatch) => {
      dispatch({
        type: 'USERS_LIST_CLOSE_CONFIRM',
      });
  },
};


export default actions;
