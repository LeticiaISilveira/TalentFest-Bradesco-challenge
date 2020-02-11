import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Select from './select'
 
export default function Card (props) {
 
   return(
       <div className={props.className}>
            <Select/>
            <p className={props.className}>{props.price}</p>
            <p className={props.className}>{props.change}</p>
        </div>
   )
}
