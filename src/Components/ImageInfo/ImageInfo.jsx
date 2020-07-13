import React, {useState, useEffect} from 'react';
import { ReactComponent as Cross } from './svg/Cross.svg';
import { ReactComponent as Download } from './svg/download.svg';
import './ImageInfo.css';
import imageDataURI from 'image-data-uri';
import { BounceLoader, ClipLoader } from 'react-spinners';

const ImageInfo = ({imgURL, handleIsModalOpen}) => {

	const [uri, setUri] = useState();
	const [loaded, setLoaded] = useState(false);
	
	useEffect(() => {
		imageDataURI.encodeFromURL(imgURL)
	    .then(res => setUri(res))	
		}, []);

	return (
		<div className="imageInfo_container">
			<div className="imageInfo_img-container">
				<img 
					src={imgURL} 
					alt="" 
					className="imageInfo_img" 
					onLoad={() => setLoaded(true)}
				/>
				{!loaded && <div className="imageInfo_img-overlay"><BounceLoader loading={true} /></div>}
			</div>
			<div onClick={() => handleIsModalOpen(false)} className="imageInfo_close-icon">
				<Cross />
			</div>
			<button className="imageInfo_download_button">
				{
					loaded ? <div className="imageInfo_download_icon"><Download /></div> : 
							<div className="imageInfo_download_loader">
								<ClipLoader size={20}  color='white' />
							</div>
				}
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