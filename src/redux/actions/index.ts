import { combineReducers } from 'redux';
import { courseReducer } from './courseReducer';

// Define the root state type by combining all reducer states
const rootReducer = combineReducers({
  courses: courseReducer,
  // Add other reducers here if you have them
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;