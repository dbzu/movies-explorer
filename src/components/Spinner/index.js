import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Spinner = ({errors}) => {
    return (
        <div className="spinner-container">        
            <div className="spinner"></div>
            <label>{errors}</label>
        </div>
    );
};

Spinner.propTypes = {
    errors: PropTypes.string
};

export default Spinner;