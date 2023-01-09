import React from 'react';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import '../scss/pages/_contact.scss';

function Contact() {
	return (
		<div className='contact'>
			<Navbar />
			<h1>Contact Page</h1>
			<ContactForm />
			<Footer />
		</div>
	);
}

export default Contact;
