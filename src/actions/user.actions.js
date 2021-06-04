import * as TYPES from "./types";
import UserDataService from "../services/user.service";
import { alertActions } from "./alert.actions";
import { history } from "../history";

function login(email, password) {
  return (dispatch) => {
    dispatch({
      type: TYPES.LOGIN_REQUEST,
      email,
    });
    UserDataService.login(email, password)
      .then((user) => {
        dispatch({
          type: TYPES.LOGIN_SUCCESS,
          user,
        });
        history.push("/");
      })
      .catch((err) => {
        dispatch({
          type: TYPES.LOGIN_FAILURE,
          err,
        });
        dispatch(alertActions.error(err.toString()));
      });
  };
}

function logout() {
  return (dispatch) => {
    window.localStorage.removeItem("token");
    dispatch({
      type: TYPES.LOGOUT,
    });
    history.push("/login");
  };
}

export const userActions = {
  login,
  logout,
};
