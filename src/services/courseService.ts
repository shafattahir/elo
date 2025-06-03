// src/services/courseService.ts
import axios from 'axios';
import { BASE_URL } from '../config';
import { getAuthToken } from '../utils/auth'; // You'll need to implement this

export const getCourses = async () => {
  try {
    const token = await getAuthToken(); // Get stored token
    
    const response = await axios.get(`${BASE_URL}/api/courses`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
      },
    });
    
    return response.data;
  }catch (error) {
  let errorMessage = 'Failed to fetch courses';
  
  // Type guard for AxiosError
  if (axios.isAxiosError(error)) {
    // Now TypeScript knows this is an AxiosError
    console.error('API Error:', error.response?.data || error.message);
    errorMessage = error.response?.data?.message || error.message;
  } 
  // Type guard for standard Error
  else if (error instanceof Error) {
    console.error('Error:', error.message);
    errorMessage = error.message;
  }
}
};