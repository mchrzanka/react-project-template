import React from 'react';
import { useParams } from 'react-router-dom'; //returns an object containing key value pairs from the current URL parameters. Each key corresponds to a parameter defined in your route (in this case, /portfolio/:projectName)

//styles
import '../scss/components/_postView.scss';

//data
import data from '../data/data.json';
import Post from '../components/Post';

function PostView() {
	const { id } = useParams(); //grabs the id from the url. The const name has to match the wording set in the router. {} syntax is known as "destructuring assignment". Equivalent to:
	//const params = useParams();
	//const id = params.id;

	const post = data.find((item) => item.url === id);

	return (
		<div className='portfolio-view'>
			{post ? (
				<div className='container'>
					<Post
						key={post.id}
						id={post.id}
						title={post.title}
						desc={post.desc}
						img={post.img}
						url={post.url}
					/>
				</div>
			) : (
				<div>
					<p>Post not found</p>
				</div>
			)}
		</div>
	);
}

export default PostView;
