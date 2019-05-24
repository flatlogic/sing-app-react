import { RECEIVED_PRODUCTS, RECEIVED_PRODUCT, UPDATED_PRODUCT, DELETED_PRODUCT } from '../actions/products';

const defaultState = {
    data: []
};

export default function productsReducer(state = defaultState, action) {
    switch (action.type) {
        case RECEIVED_PRODUCTS:
            return Object.assign({}, state, {
                data: action.payload
            });
        case RECEIVED_PRODUCT:
            return Object.assign({}, state, {
                data: [...state.data, action.payload]
            });
        case UPDATED_PRODUCT:
            let index = state.data.findIndex(p => p.id === action.payload.id);
            return Object.assign({}, state, {
                data: state.data.map((p, i) => {
                    if (i === index) {
                        return action.payload;
                    }
                    return p;
                })
            });
        case DELETED_PRODUCT:
            let indexToDelete = state.data.findIndex(p => p.id === action.payload.id);
            return Object.assign({}, state, {
                data: [...state.data.splice(indexToDelete, 1)]
            });
        default:
            return state;
    }
}
