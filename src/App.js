import React, { Component } from 'react';
import Layout from './containers/Layout';
import { Provider } from 'react-redux';
import movieStore from './store';

class App extends Component {
	render() {
		return (
			<Provider store={movieStore}>
				<Layout/>
			</Provider>
		);
	}
}

export default App;
