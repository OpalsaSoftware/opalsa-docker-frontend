import axios from "./axios";

export const getCasinosRequest = () => axios.get("/api/casinos");
export const getCasinoRequest = (id) => axios.get(`/api/casinos/${id}`);
export const createCasinoRequest = (FormData) => {
  return axios.post("/api/casinos", FormData, {
    headers: {
      "Content-Type": "multipart/form-data",
      
    },
  });
};
// Este método ahora recibe casinoId como primer parámetro y formData como segundo.
export const updateCasinoRequest = (casinoId, formData) => {
  return axios.put(`/api/casinos/${casinoId}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const deleteCasinoRequest = (id) => axios.delete(`/api/casinos/${id}`);

export const deleteCasinoDocumentRequest = (casinoId, publicId, category) => {
  return axios.delete(`/api/casinos/${casinoId}/document`, {
    data: { publicId, category }, // Los datos que enviamos en la solicitud DELETE
  });
};



