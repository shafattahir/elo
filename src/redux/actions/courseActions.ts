import {getCourses} from '../../services/courseService';
import {Dispatch} from 'redux';
import axios from 'axios';

export const fetchCourses = () => async (dispatch: Dispatch) => {
  dispatch({ type: 'FETCH_COURSES_REQUEST' });
  
  try {
    const courses = await getCourses();
    dispatch({
      type: 'FETCH_COURSES_SUCCESS',
      payload: courses,
    });
  } catch (error) {
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
  
  dispatch({
    type: 'FETCH_COURSES_FAILURE',
    payload: errorMessage,
  });
}
};