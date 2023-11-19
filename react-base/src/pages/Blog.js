//components
import React from 'react';
import Post from '../components/Post';

//styling
import '../scss/pages/_blog.scss';

//data
import data from '../data/data.json';

function Blog() {
	return (
		<div className='blog'>
			<div className='post-header'>
				<h1>Posts/Blog Page</h1>
			</div>

			<div className='blog-posts'>
				{data.map((post) => (
					<Post
						key={post.id}
						id={post.id}
						title={post.title}
						desc={post.desc}
						img={post.img}
						url={post.url}
					/>
				))}
			</div>
		</div>
	);
}

export default Blog;
