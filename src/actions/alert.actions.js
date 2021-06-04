import * as TYPES from "./types";

export const alertActions = {
  success,
  error,
  clear,
};

function success(message) {
  return { type: TYPES.SUCCESS, message };
}

function error(message) {
  return { type: TYPES.ERROR, message };
}

function clear(message) {
  return { type: TYPES.CLEAR, message };
}
