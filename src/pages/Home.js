import React, { Component } from 'react';

import Wrapper from '../components/global/Wrapper';
import Header from '../components/global/Header';
import Footer from '../components/global/Footer';

// import Hero from '../components/utility/Hero';
import PortfolioListing from '../components/utility/PortfolioListing';


class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			authenticated: true,
		};
	}
	
	render() {
		return (
			<Wrapper>
				<Header />
				<section id="content" className="home">
					{/* <Hero/> */}
					<PortfolioListing/>
				</section>
				<Footer />
			</Wrapper>
		);
	}
}

export default Home;
