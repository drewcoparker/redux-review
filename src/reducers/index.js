// Master reducer. Manages all reducers which are responsible for state.
import { combineReducers } from 'redux';
import StudentReducer from './StudentReducer';


const masterReducer = combineReducers({
    students: StudentReducer
});


export default masterReducer;
