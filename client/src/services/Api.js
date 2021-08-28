/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

export default () => {
  const token = localStorage.getItem('Authorization');
  return axios.create({
    baseURL: `http://localhost:9000/`,
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}