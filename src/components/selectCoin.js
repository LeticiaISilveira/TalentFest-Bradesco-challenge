import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const SelectCoin = (props) => {
	const values = props.values;

	return(
		<div>
			<select className={css(styles.select)} onChange={props.onChange}>
				{values.map((coin, index) => 
					<option className={props.className} key={index}>{coin.name}
					</option>                           
				)}
				</select>
		</div>
	)
}

export default SelectCoin;

const styles = StyleSheet.create({
	select: {
		background: '#45B8AC'
	}
})
