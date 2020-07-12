import React, {useState, useEffect} from 'react';
import { ReactComponent as Cross } from './svg/Cross.svg';
import { ReactComponent as Download } from './svg/download.svg';
import './ImageInfo.css';
import imageDataURI from 'image-data-uri';

const ImageInfo = ({imgURL, handleIsModalOpen}) => {

	const [uri, setUri] = useState();
	

	useEffect(() => {
		imageDataURI.encodeFromURL(imgURL)
	    .then(res => setUri(res))	
		}, []);

	return (
		<div className="imageInfo_container">
			<img src={imgURL} alt="" className="imageInfo_img" />
			<div onClick={() => handleIsModalOpen(false)} className="imageInfo_close-icon">
				<Cross />
			</div>
			<button className="imageInfo_download_button">
				<div className="imageInfo_download_icon"><Download /></div>
				<a 
					className="imageInfo_download_link" 
					href={uri} 
					download
				>Download</a>
			</button>
		</div>
	);
};

export default ImageInfo;