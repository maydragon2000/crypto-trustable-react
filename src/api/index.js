import http from "../services/httpService";
import axios from "axios";

const postLogin = (user) => {
  return axios.post("http://localhost:8000/api/login", user);
}
const getGoogleLogin = () => {
  return axios.get("http://localhost:8000/api/google");
}
const sendResetPasswordLink = (email) =>
  axios.post("http://localhost:8000/api/forgot", email);
const resetPassword = (user) =>
  axios.post(`http://localhost:8000/api/passwordreset`, user);
const postLogout = () => http.post("/auth/logout");
const postRegister = (user) => {
  return axios.post("http://localhost:8000/api/register", user);
};
const getConfirmation = (token) => http.get(`/auth/confirmation/${token}`);
const resendConfirmation = (user) => axios.post("http://localhost:8000/api/resend", user);
const resetRegister = (user) => http.post("/auth/register/reset", user);
const getUser = (token) => {
  axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` };
  return axios.get("http://localhost:8000/api/user");
};

export {
  postLogin,
  sendResetPasswordLink,
  resetPassword,
  postLogout,
  postRegister,
  getConfirmation,
  resendConfirmation,
  getUser,
  resetRegister,
  getGoogleLogin,
};
