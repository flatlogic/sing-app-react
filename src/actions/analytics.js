import mock from '../pages/analytics/mock';

export const RECEIVED_DATA_SUCCESS = 'RECEIVED_DATA_SUCCESS';
export const RECEIVING_DATA = 'RECEIVING_DATA';

export function receiveDataRequest() {
    return (dispatch) => {
        dispatch(receivingData());
        new Promise((resolve) => {
            resolve(mock.backendData)
        }).then(data => {
            dispatch(receiveDataSuccess(mock.backendData));
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




