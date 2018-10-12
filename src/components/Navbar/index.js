import React from 'react';
import PropTypes from 'prop-types';

const Navbar = (props) => {
    const { buttonOnClick } = props;
    return (
        <nav className="navbar navbar-dark bg-dark">
            <span className="navbar-brand mx-auto">Movies Explorer</span>
            <button className="btn" onClick={() => buttonOnClick()}><i className="fas fa-plus"></i></button>
        </nav>
    );
}

Navbar.propTypes = {
    buttonOnClick: PropTypes.func
};

export default Navbar;