import axios from 'axios';

export const RECEIVED_DATA_SUCCESS = 'RECEIVED_DATA_SUCCESS';
export const RECEIVING_DATA = 'RECEIVING_DATA';

export function receiveDataRequest() {
    return (dispatch) => {
        dispatch(receivingData());
        axios.get('/analytics').then(res => {
            dispatch(receiveDataSuccess(res.data));
        })
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




