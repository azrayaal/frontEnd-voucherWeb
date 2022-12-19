import axios from 'axios';
// const dotenv = require('dotenv');
// const ROOT_API = process.env.ROOT_API;
const ROOT_API = 'http://localhost:4020';

export async function getLandingPages() {
  const URL = `voucher/getall`;
  const response = await axios.get(`${ROOT_API}/${URL}`);
  const axiosResponse = response.data;
  return axiosResponse.data;
}

export async function getDetaivoucher(id) {
  const URL = `voucher/getall`;
  const response = await axios.get(`${ROOT_API}/${URL}/${id}`);
  // const axiosResponse = response.data;
  // return axiosResponse.data;
  return response.data;
}
