//components
import React from 'react';
import Navbar from '../components/Navbar';
import Post from '../components/Post';
import Footer from '../components/Footer';

//styling
import '../scss/pages/_blog.scss';

//imgs
import Placeholder from '../assets/imgs/placeholder.jpg';

function Blog() {
	return (
		<div className='blog'>
			<Navbar />
			<div className='post-header'>
				<h1>Posts/Blog Page</h1>
			</div>

			<div className='blog-posts'>
				<Post
					url='post1'
					title='Post 1'
					summary='Small readmore-type blurb'
					src={Placeholder}
					alt='Placeholder for images'
				/>
				<Post
					url='post2'
					title='Post 2'
					summary='Small readmore-type blurb'
					src={Placeholder}
					alt='Placeholder for images'
				/>
				<Post
					url='post3'
					title='Post 3'
					summary='Small readmore-type blurb'
					src={Placeholder}
					alt='Placeholder for images'
				/>
			</div>
			<Footer />
		</div>
	);
}

export default Blog;
