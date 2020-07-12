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

	const [search, setSearch] = useState(sessionStorage.getItem('name') ? sessionStorage.getItem('name') : '');
	const [category, setCategory] = useState(sessionStorage.getItem('category') ? sessionStorage.getItem('category') : '');
	const [type, setType] = useState(sessionStorage.getItem('type') ? sessionStorage.getItem('type') : '');
	const [orientation, setOrientation] = useState(sessionStorage.getItem('orientation') ? sessionStorage.getItem('orientation') : '');
	const [color, setColor] = useState(sessionStorage.getItem('color') ? sessionStorage.getItem('color') : '');

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
		sessionStorage.setItem('name', search);
		sessionStorage.setItem('category', category);
		sessionStorage.setItem('type', type);
		sessionStorage.setItem('orientation', orientation);
		sessionStorage.setItem('color', color);
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
					<Select currentValue={category} data={categories} raiseSelect={setCategory}>CATEGORY</Select>
					<Select currentValue={type} data={types} raiseSelect={setType}>TYPE</Select>
					<Select currentValue={orientation} data={orientations} raiseSelect={setOrientation}>ORIENTATION</Select>
					<Select currentValue={color} data={colors} raiseSelect={setColor}>COLOR</Select>
				</div>
				<button className="SearchBar_submit" onClick={e => submit(e)}>Search</button>
			</form>
		</div>
	);
};

export default SearchBar;