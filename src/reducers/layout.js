import { CHANGE_THEME } from '../actions/layout';

export const DashboardThemes = {
  LIGHT: "light",
  DARK: "dark"
};

Object.freeze(DashboardThemes);

const defaultState = {
  dashboardTheme: DashboardThemes.DARK
};

export default function layoutReducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        dashboardTheme: action.payload
      };
    default:
      return state;
  }
}
