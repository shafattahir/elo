import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { useAuthStore } from '../../store/authStore';

const BASE_URL = 'https://api.planetwealth.com/v1';

class ApiClient {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: BASE_URL,
      timeout: 30000,
      headers: {
        'Content-Type': 'application/json',
        'X-Device-Id': '', // Will be set in interceptor
      },
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    // Request interceptor
    this.instance.interceptors.request.use(
      async (config) => {
        // Inject device ID
        const deviceId = ''; // You'll get this from device utils
        if (deviceId) {
          config.headers['X-Device-Id'] = deviceId;
        }

        // Inject auth token if exists
        const token = useAuthStore.getState().token;
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
      },
      (error) => Promise.reject(error)
    );

    // Response interceptor
    this.instance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          // Handle token expiration
          useAuthStore.getState().clearAuth();
        }
        
        // Convert to standard error format
        return Promise.reject({
          message: error.response?.data?.message || 'Network Error',
          code: error.response?.status || 500,
          data: error.response?.data,
        });
      }
    );
  }

  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.instance.get<T>(url, config);
    return response.data;
  }

  public async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.instance.post<T>(url, data, config);
    return response.data;
  }

  public async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.instance.put<T>(url, data, config);
    return response.data;
  }

  public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.instance.delete<T>(url, config);
    return response.data;
  }
}

export const apiClient = new ApiClient();