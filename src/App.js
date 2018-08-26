import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ScrollToTop from './components/global/ScrollToTop';

import './assets/css/foundation.css';
import './assets/css/fontface.css';
import './assets/css/vahnisme.css';

import HomePage from './pages/Home';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<ScrollToTop>
					<Route path="/" exact component={HomePage} />
				</ScrollToTop>
			</BrowserRouter>
		);
	}
}

export default App;
