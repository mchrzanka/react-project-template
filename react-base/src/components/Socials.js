import React from 'react';
import { BsInstagram } from 'react-icons/bs';

import '../scss/components/_socials.scss';

function Socials() {
	return (
		<div className='socials'>
			<a
				href='https://www.instagram.com/mayradish/'
				aria-label='Instagram'
				target='_blank'
			>
				<BsInstagram size='3rem' />
			</a>
		</div>
	);
}

export default Socials;
