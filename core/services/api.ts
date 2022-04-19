import axios from 'axios';

const token = process.env.API_TOKEN;

export const api = axios.create({
  baseURL: 'https://api.imersaofx.danieldcs.com',
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
