import React, { Component } from 'react';
import axios from 'axios';

import PortfolioItem from '../utility/PortfolioItem';

class PortfolioListing extends Component {
	constructor(props) {
		super(props);
		this.state = {
			portfolios: null,
		};
	}
	componentDidMount() {
		axios.get(`https://www.ervandra.com/wp-json/wp/v2/posts?categories=2&per_page=100&_embed`).then(res => {
			const portfolios = res.data;
			this.setState({ portfolios });
		});
	}
	render() {
		return (
			<div className="van-portfolio featured" id="portfolio">
				<div className="grid-container">
					<div className="grid-x grid-margin-x">
						<div className="cell">
							<h2>Latest Projects</h2>
						</div>
					</div>

					<div className="grid-x grid-margin-x row-project">
						<div className="cell">
							
								{ this.state.portfolios ? 
									<div id="container-isotope" className="js-isotope">
									{ this.state.portfolios.map((portfolio, index) => (
										<PortfolioItem key={index} data={portfolio} />
									))}
									</div>
								:
									<div className="text-center portfolio-loading"><h3><span className="fa fa-spin fa-circle-o-notch"></span></h3></div>
								}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default PortfolioListing;
