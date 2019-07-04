import {
  RECEIVED_PRODUCTS,
  RECEIVED_PRODUCT,
  UPDATED_PRODUCT,
  DELETED_PRODUCT,
  RECEIVING_PRODUCTS,
  RECEIVING_PRODUCT,
  UPDATING_PRODUCT,
  DELETING_PRODUCT,
  RECEIVED_IMAGES
} from '../actions/products';

const defaultState = {
    data: [],
    images: [],
    isReceiving: false,
    isUpdating: false,
    isDeleting: false,
    idToDelete: null
};

export default function productsReducer(state = defaultState, action) {
    switch (action.type) {
        case RECEIVED_PRODUCTS:
            return Object.assign({}, state, {
                data: action.payload,
                isReceiving: false,
            });
        case RECEIVED_PRODUCT:
            return Object.assign({}, state, {
                data: [...state.data, action.payload],
                isReceiving: false,
            });
        case UPDATED_PRODUCT:
            let index = state.data.findIndex(p => p.id === action.payload.id);
            return Object.assign({}, state, {
                data: state.data.map((p, i) => {
                    if (i === index) {
                        return Object.assign({}, p, action.payload);
                    }
                    return p;
                }),
                isUpdating: false,
            });
        case DELETED_PRODUCT:
            let indexToDelete = state.data.findIndex(p => p.id === action.payload.id);
            let data = [...state.data];
            data.splice(indexToDelete, 1);
            return Object.assign({}, state, {
                data: [...data],
                isDeleting: false,
                idToDelete: null
            });
        case RECEIVING_PRODUCTS:
        case RECEIVING_PRODUCT:
            return Object.assign({}, state, {
                isReceiving: true
            });
        case UPDATING_PRODUCT:
            return Object.assign({}, state, {
                isUpdating: true
            });
        case DELETING_PRODUCT:
            return Object.assign({}, state, {
                isDeleting: true,
                idToDelete: action.payload.id
            });
        case RECEIVED_IMAGES:
            return Object.assign({}, state, {
                images: action.payload,
            });
        default:
            return state;
    }
}
