import { API_BASE_URL } from "../config/apiConfig";

const request = async (endpoint, options = {}) => {
  const token = localStorage.getItem("br30FoodOSToken");

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: options.method || "GET",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok || data.success === false) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
};

export const registerUser = (payload) => {
  return request("/auth/register", {
    method: "POST",
    body: payload,
  });
};

export const verifyOtp = (payload) => {
  return request("/auth/verify-otp", {
    method: "POST",
    body: payload,
  });
};

export const resendRegisterOtp = (payload) => {
  return request("/auth/resend-register-otp", {
    method: "POST",
    body: payload,
  });
};

export const loginUser = (payload) => {
  return request("/auth/login", {
    method: "POST",
    body: payload,
  });
};

export const forgotPassword = (payload) => {
  return request("/auth/forgot-password", {
    method: "POST",
    body: payload,
  });
};

export const resetPassword = (payload) => {
  return request("/auth/reset-password", {
    method: "POST",
    body: payload,
  });
};

export const resendResetOtp = (payload) => {
  return request("/auth/resend-reset-otp", {
    method: "POST",
    body: payload,
  });
};

export const getMe = () => {
  return request("/auth/me");
};

export const saveAuthData = ({ token, user }) => {
  if (token) localStorage.setItem("br30FoodOSToken", token);
  if (user) localStorage.setItem("br30FoodOSUser", JSON.stringify(user));
};

export const clearAuthData = () => {
  localStorage.removeItem("br30FoodOSToken");
  localStorage.removeItem("br30FoodOSUser");
};

export const getStoredUser = () => {
  try {
    return JSON.parse(localStorage.getItem("br30FoodOSUser")) || null;
  } catch {
    return null;
  }
};

export const getStoredToken = () => {
  return localStorage.getItem("br30FoodOSToken");
};
