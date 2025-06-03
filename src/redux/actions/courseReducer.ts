interface CourseState {
  loading: boolean;
  courses: any[]; // Consider replacing 'any' with your Course type
  error: string | null;
}

const initialState: CourseState = {
  loading: false,
  courses: [],
  error: null,
};

export const courseReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'FETCH_COURSES_REQUEST':
      return {...state, loading: true};
    case 'FETCH_COURSES_SUCCESS':
      return {...state, loading: false, courses: action.payload};
    case 'FETCH_COURSES_FAILURE':
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
};