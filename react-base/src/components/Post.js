import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

import '../scss/components/_post.scss';

const Post = (props) => {
	return (
		<div className={`post`}>
			<div className='post-img'>
				<img src={props.src} alt={props.alt} />
			</div>
			<h1 className='post-title'>{props.title}</h1>
			<p className='post-summary'>{props.summary}</p>

			<a
				href={`blog/${props.url}`}
				className='btn'
				aria-label='View Post Button'
			>
				View Post <BsArrowRight />
			</a>
		</div>
	);
};

export default Post;
