import axios from "axios";

const postRegister = (user) => {
  return axios.post(`${process.env.REACT_APP_SERVER_HOST}/api/users/register`, user);
};
const postLogin = (user) => {
  return axios.post(`${process.env.REACT_APP_SERVER_HOST}/api/users/login`, user);
}
const postRecoveryPhrase = (data) => {
  return axios.post(`${process.env.REACT_APP_SERVER_HOST}/api/users/recoveryphrase`, data);
}
const resetPassword = (user) =>
  axios.post(`${process.env.REACT_APP_SERVER_HOST}/api/users/resetPassword`, user);
const resetUser = (user) =>
  axios.post(`${process.env.REACT_APP_SERVER_HOST}/api/users/resetuser`, user);
const changePassword = (data) =>
  axios.post(`${process.env.REACT_APP_SERVER_HOST}/api/users/changePassword`, data);
const uploadImage = (data) => {
  console.log(data, "imagedata");
  const formData = new FormData();
  formData.append('userName', data.userName);
  formData.append('photo', data.image);
  return axios.post(`${process.env.REACT_APP_SERVER_HOST}/api/users/addImage`, formData);
}

const getUser = (token) => {
  axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` };
  return axios.get(`${process.env.REACT_APP_SERVER_HOST}:8000/api/user`);
};

export {
  postRegister,
  postLogin,
  postRecoveryPhrase,
  resetPassword,
  resetUser,
  changePassword,
  uploadImage,
  getUser,
};
