import axios from 'axios';
import { toast } from 'react-toastify';

export const RECEIVED_PRODUCTS = 'RECEIVED_PRODUCTS';
export const RECEIVED_PRODUCT = 'RECEIVED_PRODUCT';
export const UPDATED_PRODUCT = 'UPDATED_PRODUCT';
export const DELETED_PRODUCT = 'DELETED_PRODUCT';

export function getProductsRequest() {
    return (dispatch) => {
        axios.get('/products').then(res => {
            dispatch(receiveProducts(res.data));
        })
    };
}

export function loadProductRequest(id) {
    return (dispatch) => {
        axios.get('/products/' + id).then(res => {
            dispatch(receiveProduct(res.data));
        })
    };
}

export function updateProductRequest(product) {
    return (dispatch) => {
        axios.put('/products/' + product.id, product).then(res => {
            dispatch(updateProduct(res.data));
            toast.success("Product has been Updated!");
        })
    };
}

export function createProductRequest(payload) {
    return (dispatch) => {
        axios.post('/products', payload.product).then(res => {
            dispatch(updateProduct(res.data));
            payload.history.push('/app/ecommerce/management');
            toast.success("Product has been Created!");
        })
    };
}

export function deleteProductRequest(payload) {
    return (dispatch) => {
        axios.delete('/products/' + payload.id).then(res => {
            dispatch(deleteProduct({id: payload.id}));
            if (payload.history.location.pathname !== '/app/ecommerce/management') {
                payload.history.push('/app/ecommerce/management');
            }
            toast.success("Product has been Deleted!");
        })
    };
}

export function receiveProducts(payload) {
    return {
        type: RECEIVED_PRODUCTS,
        payload
    }
}

export function receiveProduct(payload) {
    return {
        type: RECEIVED_PRODUCT,
        payload
    }
}

export function updateProduct(payload) {
    return {
        type: UPDATED_PRODUCT,
        payload
    }
}

export function deleteProduct(payload) {
    return {
        type: DELETED_PRODUCT,
        payload
    }
}


