import React from 'react';
import '../App.css';
import { Color } from './Color';

export const FlowCode = props => {
	
	return (
		
		<div className="container">
		
			<h1>Color Selector</h1>
			
				<div className='reset' >
				
					<button onClick={props.onClick}>Reset</button>
				
				</div>
				
				<div className="selected-color">
					
					<h2>{props.selectedColor ? `You picked ${props.selectedColor}` : 'Choose a Color!'}</h2>
				
				</div>
				
				{props.colors.map((color, i) => <Color ref={props.hash[color]} key={'color_'+i} color={color} selected={props.selectedColor} onClick={props.onClick2}/>)}
        
		</div>
	
	);
}