import React, {useContext} from 'react';
import Gallery from '../Gallery/Gallery';
import DeleteButton from '../DeleteButton/DeleteButton';
import {BookmarkedDataContext} from '../../Context/DataProvider/DataProvider';
import './Bookmarks.css';

const Bookmarks = () => {

	const [bookmarks] = useContext(BookmarkedDataContext);

	return (
		<>
			{
				!bookmarks.length ? 
				<div className='Bookmarks_container'>
					<h1 className='Bookmarks_text'>No Bookmarks</h1>
				</div> 
				:  <Gallery images={bookmarks} Button={DeleteButton} />
			}
		</>
	);
};

export default Bookmarks;