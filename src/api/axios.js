import axios from "axios";

// Crea una instancia de Axios
const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,  // Usar la variable de entorno para la URL base
  withCredentials: true // Permitir que Axios envíe cookies con las solicitudes
});

instance.interceptors.request.use((config) => {
  const token = document.cookie
    .split('; ')
    .find(row => row.startsWith('token=')) // Cambiado a 'token=' en lugar de 'rw.authenticated='
    ?.split('=')[1]; // Extrae el valor del token

  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`; // Añade el token a los headers
    console.log("Token encontrado:", token); // Para verificar si se está extrayendo el token correctamente
  } else {
    console.log("Token no encontrado"); // Agregar un mensaje para el caso cuando no se encuentra el token
  }

  return config; // Devuelve la configuración modificada
}, (error) => {
  return Promise.reject(error); // Rechaza el error
});

export default instance;
