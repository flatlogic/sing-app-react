export const CHANGE_THEME = 'CHANGE_THEME';

export function changeTheme(payload) {
  return {
    type: CHANGE_THEME,
    payload,
  };
}


