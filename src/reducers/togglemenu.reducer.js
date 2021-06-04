import * as TYPES from "../actions/types";

const initialState = { isShow: false };

export function menu(state = initialState, action) {
  switch (action.type) {
    case TYPES.TOGGLE_MENU:
      return { isShow: !state.isShow };
    default:
      return state;
  }
}
