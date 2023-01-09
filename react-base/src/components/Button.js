//imr
import React from 'react';
import { Link } from 'react-router-dom';

import '../scss/components/_button.scss';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
	children,
	type,
	onClick,
	buttonStyle,
	buttonSize,
}) => {
	//we check if the button has any styles applied to it, if not then we default to the first thing in the STYLES array, 'btn--primary'.
	const checkButtonStyle = STYLES.includes(buttonStyle)
		? buttonStyle
		: STYLES[0];

	//same thing for button size, if it's set then do that size, if not then it defaults to 'btn--medium'.
	const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

	return (
		<Link to='/contact' className='btn-mobile'>
			<button
				className={`btn ${checkButtonStyle} ${checkButtonSize}`}
				onClick={onClick}
				type={type}
			>
				{children}
			</button>
		</Link>
	);
};
