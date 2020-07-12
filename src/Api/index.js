import axios from 'axios';
export const fetchData = async ({ name, category, type, orientation, color }) => {
		name = name ? name.split("").map(elem => elem === " " ? "+" : elem).join("") : sessionStorage.getItem('name') ? sessionStorage.getItem('name') : 'cars';
		category = category ? category : sessionStorage.getItem('category') ? sessionStorage.getItem('category') : '';
		type = type ? type : sessionStorage.getItem('type') ? sessionStorage.getItem('type') : 'all';
		orientation = orientation ? orientation : sessionStorage.getItem('orientation') ? sessionStorage.getItem('orientation') : 'all';
		color = color ? color : sessionStorage.getItem('color') ? sessionStorage.getItem('color') : '';
		// console.log(`name=${name}, category=${category}, type=${type}, orientation=${orientation}, color=${color}`);
		const API_KEY = `17343284-a4a63ce91d1bd345a494318b8`;
		const API_URL = `https://pixabay.com/api/?key=${API_KEY}&q=${name}&image_type=photo&per_page=100&category=${category}&image_type=${type}&orientation=${orientation}&color=${color}`;
		let { data : { hits }} = await axios.get(API_URL);
		// console.log(hits);
		return hits;
};