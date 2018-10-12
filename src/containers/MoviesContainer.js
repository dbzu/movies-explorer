import React, { Component } from 'react';
import Movie from '../components/Movie';
import { connect } from 'react-redux';
import { fetchMovies, editModalStateChange, deleteModalStateChange } from '../actions/movieActions';
import Spinner from '../components/Spinner';

class MoviesContainer extends Component {

    componentWillMount() {
        this.props.fetchMovies();
    }

    render() {
        const { movies, editModalStateChange, deleteModalStateChange, errors } = this.props;

        if (!this.props.moviesLoaded) {
            return <Spinner errors={errors} />;
        }
        
        return (
            <div className="container">
                <div className="row">
                    {
                        movies.map((movie, index) => {
                            return <Movie key={index} movieData={movie} edit={editModalStateChange} delete={deleteModalStateChange}/>
                        })
                    }
                </div>
            </div>
        );
    };
};

const mapStateToProps = state => ({
    movies: state.movies.movies,
    moviesLoaded: state.movies.moviesLoaded,
    errors: state.movies.errors
});


export default connect(mapStateToProps, { fetchMovies, editModalStateChange, deleteModalStateChange })(MoviesContainer);