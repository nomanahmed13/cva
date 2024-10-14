import axios from 'axios';
import { store } from '../redux/store';
import { logout } from '../redux/slices/authSlice';
import toast from 'react-hot-toast';

const BASE_URL = 'http://localhost:3055/v1';


const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const axiosPrivate = axios.create({
	baseURL: BASE_URL,
	headers: { 'Content-Type': 'application/json' },
	withCredentials: true,
});

// Request interceptor
api.interceptors.request.use(
	async (request) => {
		// get user data from redux --> active account
		const account = await store.getState().auth;

		// get variables isLoggedIn and token from redux
		const isAuthenticated = account?.isAuthenticated;
		const token = account?.token;

		const xtUserToken = request.headers['xt-user-token'];
		const xtClientToken = request.headers['xt-client-token'];

		// if token and isLoggedIn true then it fetch the data
		if (token && isAuthenticated) {
			if (xtUserToken === null) {
				request.headers["xt-user-token"] = `${token}`;
			}
			if (xtClientToken === null) {
				request.headers["xt-client-token"] = `${token}`;
			}
		}

		return request;
	},
	(error) => Promise.reject(error),
);

// Response interceptor
api.interceptors.response.use(
	(response) => response,
	async (error) => {
	  // Check if the error response status is 401
	  if (error.response && error.response.status === 401) {
		// Dispatch the logout action to clear user data from Redux
		toast.error("Un Authenticated!");
		store.dispatch(logout());
	  }
  
	  return Promise.reject(error);
	}
  );


export default api;