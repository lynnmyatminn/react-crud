import { toggleConstants } from "../constants";

export const toggleActions = {
  toggleMenu,
};

function toggleMenu() {
  return (dispatch) => {
    dispatch({ type: toggleConstants.TOGGLE_MENU });
  };
}
