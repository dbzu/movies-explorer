import React from 'react';
import { Field } from 'redux-form';
import Modal from 'react-bootstrap4-modal';
import PropTypes from 'prop-types';

import './style.css';

const MovieModal = (props) => {

    const { pristine, handleSubmit, onSubmit, isOpen, exit, validators, invalid, modalTitle } = props;
    const { required, minLength2, alphabetic, numeric, movieYear, longMovie, renderField, alphaNumeric, } = validators;

    return (
        <Modal visible={isOpen} onClickBackdrop={() => exit()}>
            <div className="modal-header">
                <h5 className="modal-title"><i className="fas fa-film icon-space"></i>{modalTitle}</h5>
                <button type="button" className="close" onClick={() => exit()}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <div className="modal-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <Field component={renderField} name="Title" label="Movie Title" validate={[required, minLength2, alphabetic]} />
                    </div>
                    <div className="form-group">
                        <Field component={renderField} name="Director" label="Movie Director" validate={[required, minLength2, alphabetic]}/>
                    </div>
                    <div className="form-group">
                        <Field component={renderField} name="Year" label="Release Year" validate={[required, numeric]} warn={[movieYear]}/>
                    </div>
                    <div className="form-group">
                        <Field component={renderField} name="Runtime" label="Run Time" validate={[required, alphaNumeric]} warn={[longMovie]}/>
                    </div>
                    <div className="form-group">
                        <Field component={renderField} name="Genre" label="Genre" validate={[required, alphabetic]}/>
                    </div>
                    <div className="form-group">
                        <Field component={renderField} name="Poster" label="Poster Url" validate={[required]}/>
                    </div>
                    
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={() => exit()}>close</button>
                        <button type="submit" className="btn btn-primary" disabled={invalid || pristine}>Save</button>
                    </div>
                </form>
            </div>
        </Modal>
    );
}

MovieModal.propTypes = {
    pristine: PropTypes.bool, 
    handleSubmit: PropTypes.func, 
    onSubmit: PropTypes.func, 
    isOpen: PropTypes.bool, 
    exit: PropTypes.func, 
    validators: PropTypes.object, 
    invalid: PropTypes.bool,
    modalTitle: PropTypes.string
};

export default MovieModal;