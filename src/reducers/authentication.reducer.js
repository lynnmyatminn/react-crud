import * as TYPES from "../actions/types";

let user = JSON.parse(localStorage.getItem("user"));
const initialState = user ? { loggingIn: true, user } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case TYPES.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user,
      };
    case TYPES.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
      };
    case TYPES.LOGIN_FAILURE:
      return {};
    case TYPES.LOGOUT:
      return {};
    default:
      return state;
  }
}
