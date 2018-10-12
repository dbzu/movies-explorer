import React from 'react';
import { deleteModalStateChange, deleteMovie } from '../actions/movieActions';
import { connect } from 'react-redux';  

import DeleteModal from '../components/DeleteModal';

let DeleteMovie = (props) => {
    const { isDeleteMode, deleteModalStateChange, movieDetails, deleteMovie } = props;
    
    return (   
        <DeleteModal 
            movieDetails= {movieDetails} 
            exit= {deleteModalStateChange} 
            isOpen= {isDeleteMode } 
            onConfirm= {deleteMovie}
        />
    );
};


const mapStateToProps = (state) => ({
    movieDetails: state.movies.selectedMovie,
    isDeleteMode: state.movies.deleteMode,
});


export default connect(mapStateToProps, { deleteModalStateChange, deleteMovie } )(DeleteMovie); 


