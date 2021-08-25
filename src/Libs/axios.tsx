import axios from 'axios';

export const newsApi = axios.create({
  baseURL: 'https://newsapi.org/v2',
  timeout: 5000,
  headers: {},
});
