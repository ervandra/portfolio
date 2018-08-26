import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Menu extends Component {
	render() {
		return (
			<ul>
				<li>
					<NavLink to="/" exact activeClassName="active">
						Home
					</NavLink>
				</li>
				<li>
					<NavLink to="/about" exact activeClassName="active">
						About
					</NavLink>
				</li>
				<li>
					<NavLink to="/portfolio" exact activeClassName="active">
						Portfolio
					</NavLink>
				</li>
				<li>
					<NavLink to="/contact" exact activeClassName="active">
						Contact
					</NavLink>
				</li>
			</ul>
		);
	}
}

export default Menu;
