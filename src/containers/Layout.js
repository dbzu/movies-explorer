import React, { Component } from 'react';
import NavbarContainer from './NavbarContainer';
import MoviesContainer from '../containers/MoviesContainer';
import EditMovie from './EditMovie';
import DeleteMovie from './DeleteMovie';
import AddNewMovie from './AddNewMovie';


class Layout extends Component {
  	render() {
    	return (
			<React.Fragment>
				<NavbarContainer/>
				<MoviesContainer/>
				<EditMovie/>
				<DeleteMovie/>
				<AddNewMovie/>
			</React.Fragment> 
    	);
  	};
};

export default Layout;

