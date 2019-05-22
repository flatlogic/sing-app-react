import axios from 'axios';

export const RECEIVED_PRODUCTS = 'RECEIVED_PRODUCTS';

export function getProducts() {
    return (dispatch) => {
        axios.get('/products').then(res => {
            dispatch(receiveProducts(res.data));
        })
    };
}

export function receiveProducts(payload) {
    return {
        type: RECEIVED_PRODUCTS,
        payload
    }
}


