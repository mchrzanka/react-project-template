import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//styles
import '../scss/components/_navbar.scss';

//logo
import Logo from '../assets/imgs/logo/logo.png';

function Navbar(props) {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	return (
		<>
			<nav className='navbar' role='navigation'>
				<div className='container'>
					<div className='logo'>
						<a href='/'>
							<img src={Logo} alt='Placeholder logo'></img>
						</a>
					</div>
					<div>
						<ul className={click ? 'nav-menu active' : 'nav-menu'}>
							<li className='nav-item'>
								<Link to='/' className='nav-links' onClick={closeMobileMenu}>
									Home
								</Link>
							</li>
							<li className='nav-item'>
								<Link
									to='/blog'
									className='nav-links'
									onClick={closeMobileMenu}
								>
									Blog
								</Link>
							</li>
							<li className='nav-item'>
								<Link
									to='/about'
									className='nav-links'
									onClick={closeMobileMenu}
								>
									About
								</Link>
							</li>
							<li className='nav-item'>
								<Link
									to='/contact'
									className='nav-links'
									onClick={closeMobileMenu}
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>
					<div
						onClick={handleClick}
						aria-label='Main Menu'
						className={click ? 'hamburger is-active' : 'hamburger'}
					>
						<span className='line'></span>
						<span className='line'></span>
						<span className='line'></span>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
