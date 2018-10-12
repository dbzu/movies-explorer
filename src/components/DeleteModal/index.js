import React from 'react';
import Modal from 'react-bootstrap4-modal';
import PropTypes from 'prop-types';

const DeleteModal = (props) => {
    const { movieDetails, onConfirm, isOpen, exit } = props;
    const { Title, Director, Year, Runtime, Genre } = movieDetails;
    
    return (
        <Modal visible={isOpen} onClickBackdrop={() => exit()}>
         
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="card-title"><i className="fas fa-film icon-space"></i>{Title}</h5>
                    <button type="button" className="close" onClick={() => exit()}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <small><i className="fas fa-user icon-space" title="Director"></i>{Director}</small>
                    <small><i className="fas fa-calendar-alt icon-space" title="Release Year"></i>{Year}</small>
                    <small><i className="fas fa-stopwatch icon-space" title="Run Time"></i>{Runtime}</small>
                    <small><i className="fas fa-tape icon-space" title="Genre"></i>{Genre}</small>
                </div>
                
                <div className="modal-footer">
                <strong>Are you sure you wanna delete this movie?</strong>
                    <button type="button" className="btn btn-secondary" onClick={() => exit()}>close</button>
                    <button type="submit" className="btn btn-danger" onClick={() => onConfirm(movieDetails)}>Delete</button>
                </div>
            </div>
    
        </Modal>
    )
}

DeleteModal.propTypes = {
    isOpen: PropTypes.bool,
    movieDetails: PropTypes.object,
    onConfirm: PropTypes.func,
    exit: PropTypes.func
};



export default DeleteModal;