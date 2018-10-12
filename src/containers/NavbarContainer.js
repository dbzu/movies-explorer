import React, { Component } from 'react'
import Navbar from '../components/Navbar';
import { connect } from 'react-redux';
import { addModalStateChange } from '../actions/movieActions';

class NavbarContainer extends Component {
    render() {
        const { addModalStateChange } = this.props;
        return (
            <Navbar buttonOnClick={addModalStateChange}/>
        )
    }
}

export default connect(null, { addModalStateChange })(NavbarContainer);