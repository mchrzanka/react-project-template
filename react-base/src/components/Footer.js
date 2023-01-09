import React from 'react';
import { Link } from 'react-router-dom';

//STYLING
import '../scss/components/_footer.scss';

//IMGS
import Logo from '../assets/imgs/logo/logo.png';

const Footer = () => {
	return (
		<>
			<footer>
				<div className='main-footer'>
					<div className='footer-one'>
						<div>
							<h3>Our Location</h3>
							<p>Potato Farm</p>
							<p>P0T AT0</p>
						</div>
						<div>
							<h3>Contact Us</h3>
							<p>
								<a href='tel:1111111111'>1111111111</a>
							</p>
							<p>
								<a href='mailto:example@email.com'>example@email.com</a>
							</p>
						</div>
					</div>
					<div className='footer-two'>
						<div className='logo'>
							<a href='/'>
								<img src={Logo} alt='Placeholder logo' />
							</a>
						</div>
					</div>
					<div className='footer-three'>
						<ul>
							<li className='nav-item'>
								<Link to='/' className='nav-links'>
									Home
								</Link>
							</li>
							<li className='nav-item'>
								<Link to='/blog' className='nav-links'>
									Blog
								</Link>
							</li>
							<li className='nav-item'>
								<Link to='/about'>About Us</Link>
							</li>
							<li className='nav-item'>
								<Link to='/contact'>Contact Us</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className='secondary-footer'>
					<p className='copyright'>©{new Date().getFullYear()} REACT-BASE</p>
				</div>
			</footer>
		</>
	);
};

export default Footer;
