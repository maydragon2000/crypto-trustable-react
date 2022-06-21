import axios from "axios";

const postRegister = (user) => {
  return axios.post('http://127.0.0.1:5000/api/users/register', user);
};
const postLogin = (user) => {
  return axios.post("http://127.0.0.1:5000/api/users/login", user);
}
const postRecoveryPhrase = (data) => {
  return axios.post("http://127.0.0.1:5000/api/users/recoveryphrase", data);
}
const resetPassword = (user) =>
  axios.post("http://127.0.0.1:5000/api/users/resetPassword", user);
const resetUser = (user) =>
  axios.post("http://127.0.0.1:5000/api/users/resetuser", user);
const changePassword = (data) =>
  axios.post("http://127.0.0.1:5000/api/users/changePassword", data);
const uploadImage = (data) => {
  console.log(data, "imagedata");
  const formData = new FormData();
  formData.append('userName', data.userName);
  formData.append('photo', data.image);
  return axios.post("http://127.0.0.1:5000/api/users/addImage", formData);
}

const getUser = (token) => {
  axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` };
  return axios.get("http://127.0.0.1:5000:8000/api/user");
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
