import React from 'react';
import {
	StyleSheet,
	css
} from 'aphrodite';

const styles = StyleSheet.create({
	select: {
		padding: '20px 10px',
		textAlign: 'center',
		borderRadius: '5px',
		cursor: 'pointer',
		background: 'rgba(169, 169, 169, 0.7)',
		fontSize: '18px',
		color:'#fff'

	},
	selectDiv: {
		display: 'flex',
		textAlign:'center',
		justifyContent: 'center',
		margin:'5px',
	},
})

const SelectCoin = (props) => {

	const values = props.values;
  
	return ( <
		div className = {
			css(styles.selectDiv)
		} >
		<
		select className = {
			css(styles.select)
		}
		onChange = {
			props.onChange
		} > {
			values.map((coin, index) =>
				<
				option value = {
					coin.name
				}
				className = {
					props.className
				}
				key = {
					index
				} > {
					coin.name
				} <
				/option>                        
			)
		} <
		/select> < /
		div >
	)
}

export default SelectCoin;