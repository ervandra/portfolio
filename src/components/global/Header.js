import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
	render() {
		return (
			<header id="header">
				<div className="grid-container">
					<div className="grid-x grid-margin-x align-middle">
						<div className="cell small-12 medium-4">
							<div className="logo">
								<Link to="/">
									<span className="site-name">
										<span className="title">Ervandra Halim</span>
										<span className="slogan">Website & Mobile Developer</span>
									</span>
								</Link>
							</div>
						</div>
						<div className="cell small-12 medium-8">
							{/* <nav className="main-navigation">
								<Menu />
							</nav> */}
							<div className="site-title">
								<h1>Portfolio Web Apps</h1>
								<h3>Build with React.js | Axios | WP REST API</h3>
							</div>
						</div>
					</div>
				</div>
			</header>
		);
	}
}

export default Header;
