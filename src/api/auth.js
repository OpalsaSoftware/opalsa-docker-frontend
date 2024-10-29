import axios from './axios';

export const registerRequest = (user) => axios.post(`/api/register`, user, { withCredentials: true });
export const loginRequest = (user) => axios.post(`/api/login`, user, { withCredentials: true });
export const verifyTokenRequest = (token) => axios.get('/api/verify', {
  headers: {
    'Authorization': `Bearer ${token}`
  },
  withCredentials: true
});
export const updateUserRequest = (id, user) => axios.put(`/api/users/${id}`, user, { withCredentials: true });
export const getUserDataRequest = (userId) => axios.get(`/api/users/${userId}`, { withCredentials: true });
