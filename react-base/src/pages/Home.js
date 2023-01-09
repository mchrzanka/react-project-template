import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

//STYLING
import '../scss/pages/_home.scss';

function Home() {
	return (
		<div className='home'>
			<Navbar />
			<h1>Home Page</h1>
			<Footer />
		</div>
	);
}

export default Home;
