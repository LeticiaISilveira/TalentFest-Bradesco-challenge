import React from 'react';
import { StyleSheet, css } from 'aphrodite';
 
export default function Select (props) {
 
   return(
       <div>
           <select className={props.className} onChange={props.onChange}>
                <option className={props.className}> 
                    {props.country}
                </option>                           
            </select>
       </div>
   )
}
