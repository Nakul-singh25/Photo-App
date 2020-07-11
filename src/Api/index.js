import axios from 'axios';
export const fetchData = async ({ name, category, type, orientation, color }) => {
		name = name ? name.split("").map(elem => elem === " " ? "+" : elem).join("") : 'cars';
		category = category ? category : '';
		type = type ? type : 'all';
		orientation = orientation ? orientation : 'all';
		color = color ? color : '';
		// console.log(`name=${name}, category=${category}, type=${type}, orientation=${orientation}, color=${color}`);
		const API_KEY = `17343284-a4a63ce91d1bd345a494318b8`;
		const API_URL = `https://pixabay.com/api/?key=${API_KEY}&q=${name}&image_type=photo&per_page=100&category=${category}&image_type=${type}&orientation=${orientation}&color=${color}`;
		let { data : { hits }} = await axios.get(API_URL);
		// console.log(hits);
		return hits;
};