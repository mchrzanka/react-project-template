import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Blog from './pages/Blog';
import PostView from './pages/PostView';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
	return (
		<Router>
			<div className='App'>
				<>
					<Navbar />
					<Routes>
						<Route path='/' element={<Home />}></Route>
						<Route path='/blog' element={<Blog />}></Route>
						<Route path='/blog/:id' element={<PostView />}></Route>
						<Route path='/contact' element={<Contact />}></Route>
						<Route path='/about' element={<About />}></Route>
					</Routes>
					<Footer />
				</>
			</div>
		</Router>
	);
}

export default App;
