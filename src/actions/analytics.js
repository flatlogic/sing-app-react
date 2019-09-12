import axios from 'axios';
import mock from '../pages/analytics/mock';
import config from '../config';

export const RECEIVED_DATA_SUCCESS = 'RECEIVED_DATA_SUCCESS';
export const RECEIVING_DATA = 'RECEIVING_DATA';

export function receiveDataRequest() {
    return (dispatch) => {
        // We check if app runs with backend mode
        if (!config.isBackend) {
            dispatch(receivingData());
            new Promise((resolve) => {
                resolve(mock.backendData)
            }).then(data => {
                dispatch(receiveDataSuccess(mock.backendData));
            })
        }

        else {
            dispatch(receivingData());
            axios.get('/analytics').then(res => {
              dispatch(receiveDataSuccess(res.data));
            })
        }
    };
}

export function receiveDataSuccess(payload) {
    return {
        type: RECEIVED_DATA_SUCCESS,
        payload
    }
}

export function receivingData() {
    return {
        type: RECEIVING_DATA
    }
}




