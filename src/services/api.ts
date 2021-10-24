import axios from 'axios';

const api = axios.create({
  baseURL:'https://gateway.marvel.com/v1/public/'
});

api.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    apiKey: process.env.REACT_APP_PUBLIC_KEY || ''
  };

  return config;
})

export default api;