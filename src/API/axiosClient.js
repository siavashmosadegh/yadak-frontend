import axios from 'axios';

// Create the instance
const axiosClient = axios.create({
  baseURL: 'http://localhost:8080/api/v1', // replace with your API base URL
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// REQUEST INTERCEPTOR
axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    console.log(`[Request] ${config.method?.toUpperCase()} ${config.url}`, config);

    return config;
  },
  (error) => {
    console.error('[Request Error]', error);
    return Promise.reject(error);
  }
);

// RESPONSE INTERCEPTOR
axiosClient.interceptors.response.use(
  (response) => {
    console.log('[Response]', response);
    return response.data;
  },
  (error) => {
    console.error('[Response Error]', error);

    // Global error handling
    if (error.response) {
      // Server responded with a status code out of 2xx
      const status = error.response.status;

      if (status === 401) {
        // Handle unauthorized (e.g., redirect to login)
        console.warn('Unauthorized, redirecting to login...');
      } else if (status === 500) {
        console.warn('Server error, try again later.');
      }
    }

    return Promise.reject(error);
  }
);

export default axiosClient;
