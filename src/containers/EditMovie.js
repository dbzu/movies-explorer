import React from 'react';
import { reduxForm } from 'redux-form';
import { editModalStateChange, updateMovie } from '../actions/movieActions';
import { connect } from 'react-redux';  
import Validators from '../utils/fieldValidators';

import MovieModal from '../components/MovieModal';

let EditMovie = (props) => {
    const { updateMovie, editModal, editModalStateChange, invalid, initialValues, handleSubmit, pristine } = props;
    
    return (   
        <MovieModal 
            modalTitle={initialValues.Title}
            initialValues= {initialValues} 
            invalid= {invalid} 
            validators= {Validators} 
            exit= {editModalStateChange} 
            isOpen= {editModal} 
            handleSubmit= {handleSubmit}
            onSubmit= {updateMovie}
            pristine={pristine}
        />
    );
};


const mapStateToProps = (state) => ({
    initialValues: state.movies.selectedMovie,
    editModal: state.movies.editModal,
});

EditMovie = reduxForm({ form: 'editMovie', enableReinitialize: true })(EditMovie);

export default connect(mapStateToProps, { editModalStateChange, updateMovie } )(EditMovie); 


