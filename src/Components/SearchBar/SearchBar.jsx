import React, {useState, useEffect} from 'react';
import Select from '../Select/Select';
import { fetchData } from '../../Api/index.js';
import './SearchBar.css';

const categories = [ 
						'backgrounds', 
						'fashion', 
						'nature', 
						'science', 
						'education', 
						'feelings', 
						'health', 
						'people', 
						'religion', 
						'places', 
						'animals', 
						'industry',
						'computer', 
						'food', 
						'sports', 
						'transportation', 
						'travel', 
						'buildings', 
						'business', 
						'music'
					];
const types = [ 
				"all", 
				"photo", 
				"illustration", 
				"vector"
			];
const orientations = [ 
						"all", 
						"horizontal", 
						"vertical"
					];
const colors = [ 
					"grayscale", 
					"transparent", 
					"red", 
					"orange", 
					"yellow", 
					"green", 
					"turquoise", 
					"blue", 
					"lilac", 
					"pink", 
					"white", 
					"gray", 
					"black", 
					"brown"
				];
const SearchBar = ({setLoading, setData}) => {

	const [search, setSearch] = useState('');
	const [category, setCategory] = useState('');
	const [type, setType] = useState('');
	const [orientation, setOrientation] = useState('');
	const [color, setColor] = useState('');

	const [query, setQuery] = useState({});

	const callApi = async () => {
		setData([]);
		setLoading(true);
		let images = await fetchData(query);
		setData(images);
		setLoading(false);
	};

	useEffect(() => {
		callApi();
	}, [query]);


	const submit = (event) => {
		event.preventDefault();
		setQuery({ 
			'name': search, 
			'category': category,
			'type': type,
			'orientation': orientation,
			'color': color 
		});
	};

	return (
		<div className="SearchBar">
			<div className="SearchBar_title">Photo App</div>
			<form className="SearchBar_form">
				<input 
					className="SearchBar_input"
					type="text"
					value={search}
					onChange={e => setSearch(e.target.value)}
				/>
				<div className="SearchBar_filter">
					<Select data={categories} raiseSelect={setCategory}>SELECT CATEGORY</Select>
					<Select data={types} raiseSelect={setType}>SELECT TYPE</Select>
					<Select data={orientations} raiseSelect={setOrientation}>SELECT ORIENTATION</Select>
					<Select data={colors} raiseSelect={setColor}>SELECT COLOR</Select>
				</div>
				<button className="SearchBar_submit" onClick={e => submit(e)}>Search</button>
			</form>
		</div>
	);
};

export default SearchBar;