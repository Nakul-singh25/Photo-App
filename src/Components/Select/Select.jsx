import React from 'react';
import './Select.css';
const Select = ({ children, raiseSelect, data }) => {

	return(
		<>
			<select
				className="Select"
				onChange={e => raiseSelect(e.target.value)}
			>
				<option className="Select_option" value="">{children}</option>
				{
					data.map(elem => <option className="Select_option" key={elem} value={elem}>{elem}</option>)
				}
			</select>
		</>
	);
};

export default Select;