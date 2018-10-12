import { FETCH_MOVIES, EDIT_MOVIE, UPDATE_MOVIE, DELETE_MOVIE, NEW_MOVIE, ERROR_FETCHING } from '../actions/types';

const initialState = {
    movies: [],
    moviesLoaded: false,
    
    selectedMovie: {},
    
    editModal: false,
    deleteMode: false,
    addModal: false,
    
    errors: ''
};

export default (state = initialState, action) => {
    var returnedState;

    switch (action.type) {
        case FETCH_MOVIES:
            returnedState = {...state, movies: action.payload, moviesLoaded: true };
            break;
        
        case ERROR_FETCHING:
            returnedState = {...state, errors: action.payload };
            break;

        case EDIT_MOVIE:
            returnedState = {...state, selectedMovie: action.payload, editModal: !state.editModal };
            break;

        case UPDATE_MOVIE:
            returnedState = {...state, movies: action.payload, editModal: false };
            break;

        case DELETE_MOVIE:
            if (action.movies) {
                returnedState = {...state, selectedMovie: action.payload, deleteMode: !state.deleteMode, movies: action.movies };
            }
            else {
                returnedState = {...state, selectedMovie: action.payload, deleteMode: !state.deleteMode };
            }
            break;
        
        case NEW_MOVIE:
            if (action.payload) {
                returnedState = {...state, movies: action.payload, addModal: !state.addModal };
            }
            else {
                returnedState = {...state, addModal: !state.addModal};
            }
            break;
            
        default: 
            returnedState = state;
    };

    return returnedState;
};

