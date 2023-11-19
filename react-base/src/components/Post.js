import React from 'react';
//import { BsArrowRight } from 'react-icons/bs';

import '../scss/components/_post.scss';

const Post = ({ id, title, desc, img, url }) => (
	<a href={`blog/${url}`} key={id} className='post'>
		<img
			src={require(`../assets/imgs/${img}`)} //webpack specific to make sure images are being included correctly in bundling
			alt={`website design and development for ${title}`}
		/>
		<h2>{title}</h2>
		<p>{desc}</p>
		{/* Other post content */}
	</a>
);

export default Post;
