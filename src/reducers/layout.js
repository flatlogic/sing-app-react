import { 
  CHANGE_THEME,
  CHANGE_SIDEBAR_COLOR,
  CHANGE_NAVBAR_COLOR
} from '../actions/layout';

export const DashboardThemes = {
  LIGHT: "light",
  DARK: "dark"
};

Object.freeze(DashboardThemes);

const defaultState = {
  dashboardTheme: DashboardThemes.DARK,
  sidebarColor: "#313947",
  navbarColor:  "#ffffff"
};

export default function layoutReducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        dashboardTheme: action.payload
      };
    case CHANGE_SIDEBAR_COLOR:
      return {
        ...state,
        sidebarColor: action.payload
      };
    case CHANGE_NAVBAR_COLOR:
      return {
        ...state,
        navbarColor: action.payload
      };
    default:
      return state;
  }
}
