import { CHANGE_GRID_STYLE } from '../actions/products';

const defaultState = {
  gridStyle: 'Four',
};

export default function productsReducer(state = defaultState, { type, payload }) {
  switch (type) {
    case CHANGE_GRID_STYLE:
      return {
        gridStyle: payload,
      };
    default:
      return state;
  }
}
