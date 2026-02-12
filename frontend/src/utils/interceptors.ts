
import { client } from "../client/client.gen";

//set global configs
client.setConfig({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
    timeout: 10000
})

// request interceptors
client.instance.interceptors.request.use((config) => {
    //bearer token
    return config;
})

// response interceptors
client.instance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log("An unexpected error occured")
    if (error.response?.status === 401) {
      console.log('Unauthorized — redirect to login');
      localStorage.removeItem('token');
      window.location.href = '/login';
    }

    return Promise.reject(error);
  }
);

export default client;