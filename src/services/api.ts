import axios from 'axios';
import md5 from 'js-md5';
import { REACT_APP_PUBLIC_KEY, REACT_APP_PRIVATE_KEY } from '@env';
const api = axios.create({
  baseURL:'https://gateway.marvel.com/v1/public/'
});


export interface Character {
  id: number;
  name: string;
  description: string;
  resourceURI: string;
  thumbnail: string;
}

export interface Response {
  data: {
    results: Character[];
    offset?: number;
    limit?: number;
    total?: number;
    count?: number;
  }
}

api.interceptors.request.use((config) => {
  const timeStamp = 'tsoe';
  const hash = md5.create().update(timeStamp +  REACT_APP_PRIVATE_KEY + REACT_APP_PUBLIC_KEY);


  config.params = {
    ...config.params,
    apikey: REACT_APP_PUBLIC_KEY || '',
    hash: hash.hex(),
    ts: timeStamp,
  };

  return config;
});

export default api;