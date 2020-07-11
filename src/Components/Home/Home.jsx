import React, {useState, useContext} from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Gallery from '../Gallery/Gallery';
import BookmarkButton from '../BookmarkButton/BookmarkButton';
import {FetchedDataContext} from '../../Context/DataProvider/DataProvider';
import { BounceLoader } from 'react-spinners';
import './Home.css';
const Home = () => {

	const [images, setImages] = useContext(FetchedDataContext);
	const [loading, setLoading] = useState(true);
	return (
		<>
			<SearchBar setLoading={setLoading} setData={setImages} />
			{
				loading ? <div className="Loader"><BounceLoader loading={loading} /></div> : <Gallery images={images} Button={BookmarkButton} />
			}
		</>
	);
}

export default Home;