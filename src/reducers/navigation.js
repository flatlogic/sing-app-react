import { TOGGLE_SIDEBAR, OPEN_SIDEBAR, CLOSE_SIDEBAR } from '../actions/navigation';

const initialState = {
  sidebarOpened: true,
  sidebarStatic: false,
};

export default function runtime(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebarStatic: !state.sidebarStatic,
      };
    case OPEN_SIDEBAR:
      return Object.assign({}, state, {
        sidebarOpened: true,
      });
    case CLOSE_SIDEBAR:
      return Object.assign({}, state, {
        sidebarOpened: false,
      });
    default:
      return state;
  }
}
