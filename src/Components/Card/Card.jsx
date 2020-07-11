import React, { useState } from 'react';
import Modal from 'react-modal';
import ImageInfo from '../ImageInfo/ImageInfo';
import { ReactComponent as Heart } from './svg/Heart.svg'
import './Card.css';

Modal.setAppElement('#root');


const Card = ({ data, children }) => {
	
	
	const [isModalOpen, setIsModalOpen] = useState(false);


	return (
		<div className="Card">
			<Modal
				isOpen={isModalOpen}
				onRequestClose={() => setIsModalOpen(false)}	
			>
				<ImageInfo handleIsModalOpen={setIsModalOpen} imgURL={data.largeImageURL} />
			</Modal>
			<img onClick={() => setIsModalOpen(true)} alt={data.tags} className="Card_img" src={data.webformatURL} />
			<div className="Card_bottom">
				<div className="Card_icon-wrapper"><Heart /></div>
				<span className="Card_like-number" >{data.likes}</span>
				{children}
			</div>
		</div>
	);
};

export default Card;