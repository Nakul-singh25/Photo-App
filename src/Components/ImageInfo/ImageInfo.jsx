import React from 'react';
import { ReactComponent as Cross } from './svg/Cross.svg';
import './ImageInfo.css';

const ImageInfo = ({imgURL, handleIsModalOpen}) => {
	return (
		<div className="imageInfo_container">
			<img src={imgURL} alt="" className="imageInfo_img" />
			<div onClick={() => handleIsModalOpen(false)} className="imageInfo_close-icon">
				<Cross />
			</div>
		</div>
	);
};

export default ImageInfo;