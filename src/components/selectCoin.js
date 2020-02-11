import React from 'react';
import { StyleSheet, css } from 'aphrodite';
 
const SelectCoin = (props) => {
	const values = props.values;

	return(
		<div>
			<select className={props.className} onChange={props.onChange}>
				{values.map((coin, index) => 
					<option value={coin.value} className={props.className} key={index}>{coin.name}
					</option>                           
				)}
				</select>
		</div>
	)

}

export default SelectCoin;
