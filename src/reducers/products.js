import {RECEIVED_PRODUCTS} from "../actions/products";

const defaultState = {
    data: []
};

export default function productsReducer(state = defaultState, action) {
    switch (action.type) {
        case RECEIVED_PRODUCTS:
            return Object.assign({}, state, {
                data: action.payload
            });
        default:
            return state;
    }
}
