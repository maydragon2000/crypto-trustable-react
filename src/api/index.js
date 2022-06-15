import http from "../services/httpService";
import axios from "axios";

const postRegister = (user) => {
  return axios.post('http://localhost:5000/api/users/register', user);
};
const postLogin = (user) => {
  return axios.post("http://localhost:5000/api/users/login", user);
}
const postRecoveryPhrase = (data) => {
  return axios.post("http://localhost:5000/api/users/recoveryphrase", data);
}
const resetPassword = (user) =>
  axios.post("http://localhost:5000/api/users/resetPassword", user);
const resetUser = (user) =>
  axios.post("http://localhost:5000/api/users/resetuser", user);
const changePassword = (data) =>
  axios.post("http://localhost:5000/api/users/changePassword", data);

const postLogout = () => http.post("http://localhost:5000/api/auth/logout");
const getConfirmation = (token) => http.get(`/auth/confirmation/${token}`);
const resendConfirmation = (user) => axios.post("http://localhost:8000/api/resend", user);
const resetRegister = (user) => http.post("http://localhost:5000/api/auth/register/reset", user);
const getUser = (token) => {
  axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` };
  return axios.get("http://localhost:8000/api/user");
};

export {
  postRegister,
  postLogin,
  postRecoveryPhrase,
  resetPassword,
  resetUser,
  changePassword,
  postLogout,
  getConfirmation,
  resendConfirmation,
  getUser,
  resetRegister,
};
