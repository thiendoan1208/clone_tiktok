import axios from 'axios';

const httpsRequest = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path, options = {}) => {
  const response = await httpsRequest.get(path, options);
  return response.data;
};
