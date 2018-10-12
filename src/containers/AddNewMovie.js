import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import Validators from '../utils/fieldValidators';
import { addModalStateChange, saveNewMovie } from '../actions/movieActions';
import MovieModal from '../components/MovieModal';

class AddNewMovie extends Component {

    render() {
        const { addModalStateChange, addModal, saveNewMovie, handleSubmit, invalid} = this.props;

        return (
            <MovieModal 
                modalTitle='Add New Movie'
                invalid= {invalid} 
                validators= {Validators} 
                exit= {addModalStateChange} 
                isOpen= {addModal} 
                handleSubmit= {handleSubmit}
                onSubmit= {saveNewMovie}
            />
        );
    };
};

const mapStateToProps = (state) => ({
    addModal: state.movies.addModal,
});

AddNewMovie = reduxForm({ form: 'addNewMovieForm', enableReinitialize: true })(AddNewMovie);

export default connect(mapStateToProps, { addModalStateChange, saveNewMovie })(AddNewMovie);