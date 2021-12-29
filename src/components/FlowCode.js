import React from 'react';
import { FlowCodeHeadline } from './FlowCodeHeadline';
import { ColorList } from './ColorList';

export function FlowCode(props) {
	
	return (
		<div className="container">
				
				<FlowCodeHeadline onClick={props.startOver} selectedColor={props.selectedColor} />
				
				<ColorList changeColor={props.changeColor} colors={props.colors} hash={props.hash}/>
		
		</div>
	);
}