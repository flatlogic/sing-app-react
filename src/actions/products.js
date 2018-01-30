export const CHANGE_GRID_STYLE = 'CHANGE_GRID_STYLE';

export function changeGridStyle(gridStyle) {
  return {
    type: CHANGE_GRID_STYLE,
    payload: gridStyle,
  };
}
