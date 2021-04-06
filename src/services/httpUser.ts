import axios from 'axios';
import { API } from '../configs';

export const httpUser = axios.create({
  baseURL: API.USER,
});
