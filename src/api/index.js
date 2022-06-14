import http from "../services/httpService";
import axios from "axios";

const postLogin = (user) => {
  console.log(user, "loginuser");
  return axios.post("http://localhost:5000/api/users/login", user);
}

const resetPassword = (user) =>
  axios.post(`http://localhost:8000/api/passwordreset`, user);
const postLogout = () => http.post("http://localhost:5000/api/auth/logout");
const postRegister = (user) => {
  return axios.post('http://localhost:5000/api/users/register', user);
};
const getConfirmation = (token) => http.get(`/auth/confirmation/${token}`);
const resendConfirmation = (user) => axios.post("http://localhost:8000/api/resend", user);
const resetRegister = (user) => http.post("http://localhost:5000/api/auth/register/reset", user);
const getUser = (token) => {
  axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` };
  return axios.get("http://localhost:8000/api/user");
};

export {
  postLogin,
  resetPassword,
  postLogout,
  postRegister,
  getConfirmation,
  resendConfirmation,
  getUser,
  resetRegister,
};
