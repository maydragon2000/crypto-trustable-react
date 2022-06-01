import { push } from "connected-react-router";
import { login, logout, saveEmail } from "../actions/user";
import { encode as base64encode, decode as base64decode } from 'base-64';
import {
  postRegister,
  postLogin,
  postLogout,
  getConfirmation,
  resendConfirmation,
  resetRegister,
  sendResetPasswordLink,
  resetPassword,
  getGoogleLogin,
} from "../../api/index";

export const attemptLogin = (user) => (dispatch) =>
  postLogin(user).then(({ data }) => {
    if (data.error_message === undefined) {
      dispatch(login(data.user));
      localStorage.setItem("token", data.token);
      return true;
    }
  });

export const attemptGoogleLogin = () => (dispatch) =>
  getGoogleLogin().then(({ data }) => {
    return data;
  });

export const attemptEmailVerify = (email) => (dispatch) =>
  sendResetPasswordLink(email).then(({ data }) => {
    dispatch(saveEmail(email.email));
    localStorage.setItem("verifycode", base64encode(data.verifycode));
    return true;
  });
export const attemptResetPassword = (user) => (dispatch) =>
  resetPassword(user)
    .then((response) => {
      if (response.data === "update success")
        return true;
      else return false;
    })
    .catch(() => {
      dispatch(push(`/login/reset`));
    });

export const attemptLogout = () => (dispatch) =>
  postLogout()
    .then(() => {
      dispatch(logout());
    })
    .finally(() => {
      dispatch(push("/login"));
    });

export const attemptRegister = (newUser) => () => postRegister(newUser);

export const attemptGetConfirmation = (token) => (dispatch) =>
  getConfirmation(token).then(() => {
    dispatch(push("/login"));
  });

export const attemptResendConfirmation = (user) => (dispatch) =>
  resendConfirmation(user).catch(() => {
    dispatch(push("/register"));
  });

export const attemptResetRegister = (email) => (dispatch) =>
  resetRegister(email).catch(() => {
    dispatch(push("/register"));
  });
