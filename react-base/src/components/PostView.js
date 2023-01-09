import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

import '../scss/components/_postView.scss';
import Footer from './Footer';

function PostView() {
	//This is probably not the best way to do it, but it's the only way I've figured out so far. This would require us to know exactly the # of posts/pieces that need to have an individual page (just like in php when we do blahblah.ca/blog/postID).

	//Each post has a state that we keep track of, and then via routing, we keep track of what page we're on and that's what we show.

	//I googled it and people usually do this via a json file, but I haven't tried that yet.

	const [showPost1View, setPost1View] = useState(false);
	const [showPost2View, setPost2View] = useState(false);
	const [showPost3View, setPost3View] = useState(false);

	// const base_url = 'live website url here';
	const base_url = 'http://localhost:3000/react-base/';

	function determineURL() {
		if (window.location.href === base_url + '') {
			setPost1View(true);
			setPost2View(false);
			setPost3View(false);
		} else if (window.location.href === base_url + '') {
			setPost1View(false);
			setPost2View(true);
			setPost3View(false);
		} else if (window.location.href === base_url + '') {
			setPost1View(false);
			setPost2View(false);
			setPost3View(true);
		}
	}

	//checks the URL once, the first time the page loads.
	useEffect(() => {
		determineURL();
	}, []);

	return (
		<div className='post-view'>
			<Navbar />
			<div className={showPost1View ? 'content show' : 'hide'}></div>
			<div className={showPost2View ? 'content show' : 'hide'}></div>
			<div className={showPost3View ? 'content show' : 'hide'}></div>
			<Footer />
		</div>
	);
}

export default PostView;
