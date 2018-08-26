import React, { Component } from 'react';

class PortfolioItem extends Component {
	render() {
		return (
			<div className={`item `}>
				<div className="portfolio-item">
					<div className="portfolio-img">
						<img src={this.props.data._embedded['wp:featuredmedia']['0'].source_url} width="400" height="210" className="wp-post-image" alt={ this.props.data.title.rendered } />
					</div>
					<div className="portfolio-info">
						<h3>{this.props.data.title.rendered}</h3>
					</div>
					<a
						href="https://www.ervandra.com/portfolio/ciayo-comics/"
						className="link-block"
						title={`View detail ${this.props.data.title.rendered}`}
					>
						<span className="fa fa-search-plus" />
					</a>
				</div>
			</div>
		);
	}
}

export default PortfolioItem;
