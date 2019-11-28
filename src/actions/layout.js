export const CHANGE_THEME = 'CHANGE_THEME';
export const CHANGE_SIDEBAR_COLOR = 'CHANGE_SIDEBAR_COLOR';
export const CHANGE_NAVBAR_COLOR = 'CHANGE_NAVBAR_COLOR';

export function changeTheme(payload) {
  return {
    type: CHANGE_THEME,
    payload,
  };
}

export function changeSidebarColor(payload) {
  return {
    type: CHANGE_SIDEBAR_COLOR,
    payload,
  };
}

export function changeNavbarColor(payload) {
  return {
    type: CHANGE_NAVBAR_COLOR,
    payload,
  };
}


