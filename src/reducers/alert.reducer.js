import * as TYPES from "../actions/types";

export function alert(state = {}, action) {
  switch (action.type) {
    case TYPES.SUCCESS:
      return {
        type: "alert-success",
        message: action.message,
      };
    case TYPES.ERROR:
      return {
        type: "alert-danger",
        message: action.message,
      };
    case TYPES.CLEAR:
      return {};
    default:
      return state;
  }
}
