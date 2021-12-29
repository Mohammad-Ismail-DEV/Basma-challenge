import axios from "axios";
const baseUrl = "http://localhost:8000";

axios.defaults.withCredentials = true;
axios.defaults.headers = {
  "Content-Type": "application/json",
};

export const postRegister = (data) => {
  const res = axios.post(`${baseUrl}/api/register`, data);
  return res;
};

export const postLogin = (data) => {
  const res = axios.post(`${baseUrl}/api/login`, data);
  return res;
};

export const postLogout = () => {
  const res = axios.post(`${baseUrl}/api/logout`);
  return res;
};

export const postCustomer = (data) => {
  const res = axios.post(`${baseUrl}/api/add_customer`, data);
  return res;
};

export const getCustomer = (data) => {
  const res = axios.get(`${baseUrl}/api/get_customer`, { params: data });
  return res;
};

export const getAverage = () => {
  const res = axios.get(`${baseUrl}/api/average`);
  return res;
};
