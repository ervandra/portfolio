import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return (
			<footer id="footer">
				<div className="grid-container">
					<div className="grid-x grid-margin-x">
						<div className="small-12 medium-12 large-4 cell">
							<div className="footer-section author">
								<p>
									<img
										src="https://www.ervandra.com/wp-content/themes/vahnisme/images/me-100.jpg"
										alt="Ervandra Halim"
										width="100"
										height="100"
										scale="0"
									/>
									Website &amp; Mobile Developer, He combines his education with 9 years commercial
									experience in <strong>Website</strong>, <strong>Web Apps</strong> and{' '}
									<strong>Android</strong> Development to produce high-quality websites/web
									apps/mobile apps and exceptional user experience.
								</p>
								<p>
									Website &amp; Mobile Developer.
									<br />
									Available August 2018.{' '}
									<a href="https://www.ervandra.com/hire/">
										Hire Now <span className="fa fa-angle-double-right" />
									</a>
								</p>
							</div>
						</div>
						<div className="small-12 medium-6 large-4 cell">
							<div className="footer-section follow">
								<div className="follow-ervandra">
									<div className="facebook follow-item">
										<div className="follow-icon">
											<a
												href="https://www.facebook.com/ervandra.halim"
												target="_blank"
												rel="noopener noreferrer"
											>
												<span className="fa fa-facebook-square" />
											</a>
										</div>
										<div className="follow-text">
											<p>
												Follow{' '}
												<a
													href="https://www.facebook.com/ervandra.halim"
													target="_blank"
													rel="noopener noreferrer"
												>
													ervandra.halim
												</a>{' '}
												on Facebook, Get updates about new portfolios
											</p>
										</div>
									</div>

									<div className="instagram follow-item">
										<div className="follow-icon">
											<a
												href="https://www.instagram.com/vahnisme"
												target="_blank"
												rel="noopener noreferrer"
											>
												<span className="fa fa-instagram" />
											</a>
										</div>
										<div className="follow-text">
											<p>
												Follow{' '}
												<a
													href="https://www.instagram.com/vahnisme"
													target="_blank"
													rel="noopener noreferrer"
												>
													@vahnisme
												</a>{' '}
												on Instagram, <br />
												life well balanced <span className="fa fa-smile-o" />
											</p>
										</div>
									</div>
									<div className="email follow-item">
										<div className="follow-icon">
											<a
												href="mailto:ervandra.halim@gmail.com"
												target="_blank"
												rel="noopener noreferrer"
											>
												<span className="fa fa-envelope-open-o" />
											</a>
										</div>
										<div className="follow-text">
											<p>
												Drop any questions or simply say hi! to{' '}
												<a
													href="mailto:ervandra.halim@gmail.com"
													target="_blank"
													rel="noopener noreferrer"
												>
													ervandra.halim@gmail.com
												</a>
											</p>
										</div>
									</div>
									<div className="linkedin follow-item">
										<div className="follow-icon">
											<a
												href="https://www.linkedin.com/in/ervandra"
												target="_blank"
												rel="noopener noreferrer"
											>
												<span className="fa fa-linkedin" />
											</a>
										</div>
										<div className="follow-text">
											<p>
												View my{' '}
												<a
													href="https://www.linkedin.com/in/ervandra"
													target="_blank"
													rel="noopener noreferrer"
												>
													LinkedIn profile
												</a>{' '}
												for a career summary
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="small-12 medium-6 large-4 cell">
							<div className="footer-section footer-links">
								<h3>
									<a href="https://www.ervandra.com/about/">About</a>
								</h3>
								<p>Learn about Ervan's skills and workflow</p>
								<h3>
									<a href="https://www.ervandra.com/portfolio/">PORTFOLIO</a>
								</h3>
								<p>View Ervan's web development work</p>
								<h3>
									<a href="https://www.ervandra.com/testimonials/">TESTIMONIALS</a>
								</h3>
								<p>Read client recommendations</p>
								<h3>
									<a href="https://www.ervandra.com/contact/">CONTACT</a>
								</h3>
								<p>Just wanna Say Hi?</p>
								<h3>
									<a href="https://www.ervandra.com/hire/">HIRE Ervan</a>
								</h3>
								<p>Enquire about hiring Ervan</p>
							</div>
						</div>
					</div>
				</div>

				<div className="copyright">
					<div className="grid-container">
						<div className="grid-x grid-margin-x">
							<div className="cell">
								<div className="copyright-text">
									Copyright ©2018 <strong>Ervandra Halim.</strong>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
