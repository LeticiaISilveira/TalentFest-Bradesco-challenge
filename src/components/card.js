import React from 'react';
import { StyleSheet, css } from 'aphrodite';


const Card = (props) => {
	return(
		<div className={props.className}>	
			{props.children}
		</div>
	)
}

export default Card;

