import React from 'react';

export function FlowCodeHeadline(props) {
	return (
		<>
			<h1>Color Selector</h1>
			
			<div className='reset'>
			
				<button onClick={props.onClick}>Reset</button>
			
			</div>
				
			<div className="selected-color">
					
				<h2>{props.selectedColor ? `You picked ${props.selectedColor}` : 'Choose a Color!'}</h2>
				
			</div>
		</>
	);
}