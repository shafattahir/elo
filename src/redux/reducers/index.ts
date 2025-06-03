import { combineReducers } from 'redux';
import { courseReducer } from '../actions/courseReducer';

const rootReducer = combineReducers({
  courses: courseReducer,
  // Add other reducers here if needed
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;