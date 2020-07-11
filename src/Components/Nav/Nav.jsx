import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Home } from './svg/Home.svg';
import { ReactComponent as Photo } from './svg/Photo.svg';
import './Nav.css';

const Nav = () => {
	return (
		<nav className="Nav">
			<button className="Nav-icon">
				<Link to="/">
					<Home />
				</Link>
			</button>
			<button className="Nav-icon">
				<Link to="/bookmarks">
					<Photo />
				</Link>
			</button>
		</nav>
	);
};

export default Nav;