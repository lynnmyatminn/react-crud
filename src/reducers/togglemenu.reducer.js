import { toggleConstants } from "../constants";

const initialState = { isShow: false };

export function menu(state = initialState, action) {
  switch (action.type) {
    case toggleConstants.TOGGLE_MENU:
      return { isShow: !state.isShow };
    default:
      return state;
  }
}
