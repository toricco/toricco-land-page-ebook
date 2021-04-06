import axios from 'axios';
import { API } from '../configs';

export const httpSubscription = axios.create({
  baseURL: API.SUBSCRIPTION,
});
