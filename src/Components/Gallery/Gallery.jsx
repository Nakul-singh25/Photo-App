import React from 'react';
import Card from '../Card/Card';
import './Gallery.css';

const Gallery = ({images, Button}) => {
	return (
		<div className='grid'>
			{
				images.map(elem => <Card key={elem.id} data={elem} ><Button key={elem.id} data={elem} /></Card> )
			}
		</div>
	);
}

export default Gallery;