import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import '../scss/pages/_about.scss';

function About() {
	return (
		<div className='about'>
			<Navbar />
			<h1>About Us Page</h1>
			<Footer />
		</div>
	);
}

export default About;
