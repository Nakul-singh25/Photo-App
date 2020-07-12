import React from 'react';
import './Select.css';
const Select = ({ children, raiseSelect, data, currentValue }) => {

	return(
		<>
			<select
				className="Select"
				value={currentValue}
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