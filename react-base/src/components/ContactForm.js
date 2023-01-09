import React, { useState } from 'react';
import { useFormik } from 'formik';
import emailjs from '@emailjs/browser';

import '../scss/components/_form.scss';

// A custom validation function. This must return an object which keys are symmetrical to our values/initialValues
const validate = (values) => {
	const errors = {};
	if (!values.name.trim()) {
		errors.name = 'Name required';
	}

	if (!values.email.trim()) {
		errors.email = 'Email required';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Invalid email address';
	}

	if (!values.message.trim()) {
		errors.message = 'Message required';
	}

	return errors;
};

const ContactForm = () => {
	const [success, setSuccess] = useState(false);

	// Pass the useFormik() hook initial form values, a validate function that will be called when
	// form values change or fields are blurred, and a submit function that will
	// be called when the form is submitted

	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			message: '',
		},
		validate,
		onSubmit: (values, resetForm) => {
			emailjs
				.send(
					process.env.REACT_APP_EMAILJS_SERVICE_ID,
					process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
					values,
					process.env.REACT_APP_EMAILJS_USER_ID
				)
				.then((resp) => {
					// it worked
					formik.resetForm();
					setSuccess(true);
				})
				.catch((err) => {
					console.log(err.message);
				});
		},
	});

	return (
		<div>
			<form className='contact-form' onSubmit={formik.handleSubmit}>
				<div className='name'>
					<label className='nameLabel' for='name'>
						First & Last Name
					</label>
					<input
						type='text'
						id='name'
						name='name'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.name}
					/>
					{formik.touched.name && formik.errors.name ? (
						<div className='errors'>{formik.errors.name}</div>
					) : null}
				</div>
				<div className='email'>
					<label for='email'>Email</label>
					<input
						type='text'
						id='email'
						name='email'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.email}
					/>

					{formik.touched.email && formik.errors.email ? (
						<div className='errors'>{formik.errors.email}</div>
					) : null}
				</div>
				<div className='message'>
					<label for='message'>Message</label>
					<textarea
						name='message'
						id='message'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.message}
					/>
					{formik.touched.message && formik.errors.message ? (
						<div className='errors'>{formik.errors.message}</div>
					) : null}
				</div>
				<div className='button'>
					<input type='submit' value='Send Message' name='contact' />
				</div>
				<p className='success'>
					{success === true
						? "Thanks for reaching out! I'll be in touch shortly."
						: ''}
				</p>
			</form>
		</div>
	);
};

export default ContactForm;
