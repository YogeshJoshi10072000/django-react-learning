import axios from 'axios';

export const BASE_URL = "http://localhost:8000/post/";

export const fetchUsers = async (data) => {
  try {
    return await axios.post(`${BASE_URL}`,data);
  } catch (e) {
    return [];
  }
};