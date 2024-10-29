import axios from './axios';

export const getElementosRequest = () => axios.get('/api/elemento');
export const getElementoRequest = (id) => axios.get(`/api/elemento/${id}`);
export const createElementosRequest = (FormData) => {
  return axios.post('/api/elemento', FormData, {
    headers: {
      'Content-Type':'multipart/form-data',
    },
  });
};
export const updateElementosRequest = (elemento) => axios.put(`/api/elemento/${elemento._id}`, elemento);
export const deleteElementosRequest = (id) => axios.delete(`/api/elemento/${id}`);
export const getElementosByCasinoRequest = (casinoId) => axios.get(`/api/casinos/${casinoId}/elemento`);
