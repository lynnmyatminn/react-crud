import * as TYPES from "./types";

export const toggleActions = {
  toggleMenu,
};

function toggleMenu() {
  return (dispatch) => {
    dispatch({ type: TYPES.TOGGLE_MENU });
  };
}
