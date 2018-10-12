import { FETCH_MOVIES, EDIT_MOVIE, UPDATE_MOVIE, DELETE_MOVIE, NEW_MOVIE, ERROR_FETCHING } from './types';
import axios from 'axios';
import { asyncForEach, firstLetterUpperCase } from '../utils/generalUtils';

let INITIAL_ID = 0;

export const fetchMovies = () => {
    return async dispach => {
        try {
            const APIKey = 'd298d25';
            const moviesSearchAPIUrl = `http://www.omdbapi.com/?s=Harry+Potter&y=&plot=short&r=json&apikey=${APIKey}`;
            const moviesTitleAPIUrl = (imdbID) => `http://www.omdbapi.com/?i=${imdbID}&apikey=${APIKey}`;

            const movieSearchDataRes = await axios.get(moviesSearchAPIUrl);
            let movies = movieSearchDataRes.data.Search;

            await asyncForEach(movies, async movie => {
                const movieDataResponse = await axios.get(moviesTitleAPIUrl(movie.imdbID));
                const { Runtime, Genre, Director } = movieDataResponse.data;
                
                movie.id = INITIAL_ID;
                movie.Title = firstLetterUpperCase(movie.Title)
                movie.Director = Director;
                movie.Genre = Genre;
                movie.Runtime = Runtime;

                INITIAL_ID++;
            });


            dispach({
                type: FETCH_MOVIES,
                payload: movies
            });
        }
        catch (e) {
            dispach({
                type: ERROR_FETCHING,
                payload: e.message
            });
        }
    }
}


export const editModalStateChange = (movie) => dispach => {
    if(movie) {
        dispach({
            type: EDIT_MOVIE,
            payload: movie
        });
    }
    else {
        dispach({
            type: EDIT_MOVIE,
            payload: {}
        });
    }
};

export const addModalStateChange = () => dispach => {
    dispach({
        type: NEW_MOVIE
    });
};

export const deleteModalStateChange = (movie) => dispach => {
    if(movie) {
        dispach({
            type: DELETE_MOVIE,
            payload: movie
        });
    }
    else {
        dispach({
            type: DELETE_MOVIE,
            payload: {}
        });
    }
}



export const deleteMovie = (deletedMovie) => (dispach, getState) => {
    deleteModalStateChange();

    const state = getState();
    let movies = state.movies.movies;

    movies = movies.filter(movie => movie.id !== deletedMovie.id);

    dispach({
        type: DELETE_MOVIE,
        payload: {},
        movies: [...movies]
    });

}

export const updateMovie = (updatedMovie) => (dispach, getState) => {
    editModalStateChange();

    const state = getState();
    const movies = state.movies.movies;

    const movieIndex = movies.findIndex(movie => movie.id === updatedMovie.id)
    movies[movieIndex] = updatedMovie;
    
    dispach({
        type: UPDATE_MOVIE,
        payload: [...movies]
    });
};

export const saveNewMovie = (newMovie) => (dispach, getState) => {
    addModalStateChange();

    const state = getState();
    const movies = state.movies.movies;

    newMovie.id = INITIAL_ID;
    INITIAL_ID++;

    movies.push(newMovie);
    
    dispach({
        type: NEW_MOVIE,
        payload: [...movies]
    });
};