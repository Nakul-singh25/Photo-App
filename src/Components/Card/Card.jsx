import React, { useState } from 'react';
import Modal from 'react-modal';
import ImageInfo from '../ImageInfo/ImageInfo';
import { ReactComponent as Heart } from './svg/Heart.svg';
import { BounceLoader } from 'react-spinners';
import './Card.css';

Modal.setAppElement('#root');


const Card = ({ data, children }) => {
	
	
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [loaded, setLoaded] = useState(false);


	return (
		<div className="Card">
			<Modal
				style={{overlay: {zIndex: 10}}}
				isOpen={isModalOpen}
				onRequestClose={() => setIsModalOpen(false)}	
			>
				<ImageInfo handleIsModalOpen={setIsModalOpen} imgURL={data.largeImageURL} />
			</Modal>
			<img 
				onClick={() => setIsModalOpen(true)} 
				className="Card_img" 
				alt=""
				src={data.webformatURL} 
				onLoad={() => setLoaded(true)}
			/>
			{!loaded && <div className="Card_img-overlay"><BounceLoader loading={true} /></div>}
			<div className="Card_bottom">
				<div className="Card_icon-wrapper"><Heart /></div>
				<span className="Card_like-number" >{data.likes}</span>
				{children}
			</div>
		</div>
	);
};

export default Card;