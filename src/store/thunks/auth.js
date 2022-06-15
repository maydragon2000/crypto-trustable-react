import { push } from "connected-react-router";
import { login, logout, saveEmail, setUser } from "../actions/user";
import jwt_decode from "jwt-decode";
import {
  postRegister,
  postLogin,
  postRecoveryPhrase,
  resetUser,
  changePassword,
  resetPassword,
  postLogout,
  getConfirmation,
  resendConfirmation,
  resetRegister,
  sendResetPasswordLink,
} from "../../api/index";

export const attemptLogin = (user) => (dispatch) =>
  postLogin(user).then(({ data }) => {

    if (data.error_message === undefined) {
      const decoded = jwt_decode(data.token);
      console.log(decoded, "decoded");
      dispatch(login(decoded));
      localStorage.setItem("token", data.token);
      return 200;
    }
  }).catch(({ response }) => {
    if (response.status === 400)
      return 400
    if (response.status === 404)
      return 404
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
export const attemptRegister = (newUser) => () => postRegister(newUser);
export const attemptVerifyRecoveryPhrase = (data) => () => postRecoveryPhrase(data);
export const attemptResetUser = (user) => (dispatch) =>
  resetUser(user)
    .then(({ data }) => {
      const decoded = jwt_decode(data.token);
      dispatch(setUser(decoded));
      localStorage.setItem("token", data.token);
      return true
    }).catch(() => {
      return false
    });
export const attemptChangePassword = (data) => () => changePassword(data);

export const attemptLogout = () => (dispatch) =>
  postLogout()
    .then(() => {
      dispatch(logout());
    })
    .finally(() => {
      dispatch(push("/login"));
    });


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
