const API_CONFIG = {
  development: {
    API_BASE_URL: "http://localhost:5000/api",
  },

  production: {
    API_BASE_URL: "https://br30-foodos-backend.onrender.com/api",
  },
};

const currentEnv = import.meta.env.MODE || "development";

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || API_CONFIG[currentEnv]?.API_BASE_URL || API_CONFIG.development.API_BASE_URL;

export default API_CONFIG;
