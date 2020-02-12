import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const SelectCoin = (props) => {
	const values = props.values;

	return (
		<div>
			<select className={props.className} onChange={props.onChange}>
				{values.map((coin, index) =>
					<option value={coin.code} className={props.className} key={index}>{coin.code}
					</option>
				)}
			</select>
		</div>
	)

}

export default SelectCoin;
