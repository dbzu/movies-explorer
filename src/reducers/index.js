import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    movies: movieReducer,
    form: formReducer,
});