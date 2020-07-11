import React, {useContext} from 'react';
import { ReactComponent as Delete } from './svg/Delete.svg'
import {BookmarkedDataContext} from '../../Context/DataProvider/DataProvider';

const DeleteButton = ({data}) => {

	const [bookmarks, setBookmarks] = useContext(BookmarkedDataContext);

	const handleClick = (id) => {
		let arr = bookmarks.filter(elem => id !== elem.id ? elem : null)
		setBookmarks(arr);
	};

	return (	
		<div>
			<div onClick={() => handleClick(data.id)} className="Card_icon-wrapper"><Delete /></div>	
		</div>
	);
};

export default DeleteButton;