import React, { useState, useContext } from 'react';

import { ReactComponent as Bookmark } from './svg/Bookmark.svg'
import { ReactComponent as BookmarkSolid } from './svg/BookmarkSolid.svg'

import {BookmarkedDataContext} from '../../Context/DataProvider/DataProvider';


const initialize = (arr, data) => {
	if (!arr.length) { return false; }
	let result = arr.filter(elem => elem.id === data.id ? elem : null);
	return result.length;
 }; 

const BookmarkButton = ({ data }) => {
	
	const [bookmark, setBookmark] = useContext(BookmarkedDataContext);
	const [bookmarked, setBookmarked] = useState(initialize(bookmark, data));
	

	const removeBookmark = (id) => {
		let arr = bookmark.filter(elem => id !== elem.id ? elem : null)
		setBookmark(arr);
	};

	const saveBookmark = (obj) => {
		setBookmark(prev => [...prev, obj]);
	};

	const handleClick = (obj) => {
		bookmarked ? removeBookmark(obj.id) : saveBookmark(obj);
		setBookmarked(!bookmarked);
	}

	return (
		<div>
			<div onClick={() => handleClick(data)} className="Card_icon-wrapper">{bookmarked ? <BookmarkSolid /> : <Bookmark />}</div>	
		</div>
	);
};

export default BookmarkButton;