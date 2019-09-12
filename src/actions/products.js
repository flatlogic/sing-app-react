import axios from 'axios';
import { toast } from 'react-toastify';
import mock from "../pages/products/backendMock";
import config from "../config";

export const RECEIVED_PRODUCTS = 'RECEIVED_PRODUCTS';
export const RECEIVING_PRODUCTS = 'RECEIVING_PRODUCTS';
export const RECEIVED_PRODUCT = 'RECEIVED_PRODUCT';
export const RECEIVING_PRODUCT = 'RECEIVING_PRODUCT';
export const UPDATED_PRODUCT = 'UPDATED_PRODUCT';
export const UPDATING_PRODUCT = 'UPDATING_PRODUCT';
export const DELETED_PRODUCT = 'DELETED_PRODUCT';
export const DELETING_PRODUCT = 'DELETING_PRODUCT';
export const RECEIVED_IMAGES = 'RECEIVED_IMAGES';

export function getProductsRequest() {
    return (dispatch) => {
        // We check if app runs with backend mode
        if (!config.isBackend) {
            dispatch(receiveProducts(mock));
        }

        else {
            dispatch(receivingProducts());
            axios.get('/products').then(res => {
                dispatch(receiveProducts(res.data));
            })
        }
    };
}

export function loadProductRequest(id) {
    return (dispatch) => {
        // We check if app runs with backend mode
        if (!config.isBackend) {
            dispatch(receiveProduct(mock.find(arr => arr.id === id)));
        }

        else {
            dispatch(receivingProduct());
            axios.get('/products/' + id).then(res => {
                dispatch(receiveProduct(res.data));
            })
        }
    };
}

export function updateProductRequest(product) {
    return (dispatch) => {
        // We check if app runs with backend mode
        if (!config.isBackend) return;

        dispatch(updatingProduct());
        axios.put('/products/' + product.id, product).then(res => {
            dispatch(updateProduct(res.data));
            toast.success("Product has been Updated!");
        })
    };
}

export function createProductRequest(payload) {
    return (dispatch) => {
        // We check if app runs with backend mode
        if (!config.isBackend) return;

        dispatch(updatingProduct());
        axios.post('/products', payload.product).then(res => {
            dispatch(updateProduct(res.data));
            payload.history.push('/app/ecommerce/management');
            toast.success("Product has been Created!");
        })
    };
}

export function deleteProductRequest(payload) {
    return (dispatch) => {
        // We check if app runs with backend mode
        if (!config.isBackend) return;

        dispatch(deletingProduct(payload));
        axios.delete('/products/' + payload.id).then(res => {
            dispatch(deleteProduct({id: payload.id}));
            if (payload.history.location.pathname !== '/app/ecommerce/management') {
                payload.history.push('/app/ecommerce/management');
            }
            toast.success("Product has been Deleted!");
        })
    };
}

export function getProductsImagesRequest(payload) {
  return (dispatch) => {
    // We check if app runs with backend mode
    if (!config.isBackend) return;

    axios.get('/products/images-list').then(res => {
      dispatch(receiveProductImages(res.data));
      if (!payload.img && res.data.length) {
        dispatch(updateProduct({id: payload.id, img: res.data[0]}));
      }
    })
  };
}

export function receiveProductImages(payload) {
  return {
    type: RECEIVED_IMAGES,
    payload
  }
}


export function receiveProducts(payload) {
    return {
        type: RECEIVED_PRODUCTS,
        payload
    }
}

export function receivingProducts() {
    return {
        type: RECEIVING_PRODUCTS
    }
}

export function receiveProduct(payload) {
    return {
        type: RECEIVED_PRODUCT,
        payload
    }
}

export function receivingProduct() {
    return {
        type: RECEIVING_PRODUCT
    }
}

export function updateProduct(payload) {
    return {
        type: UPDATED_PRODUCT,
        payload
    }
}

export function updatingProduct() {
    return {
        type: UPDATING_PRODUCT
    }
}

export function deleteProduct(payload) {
    return {
        type: DELETED_PRODUCT,
        payload
    }
}

export function deletingProduct(payload) {
    return {
        type: DELETING_PRODUCT,
        payload
    }
}


