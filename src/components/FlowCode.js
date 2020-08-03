import React from 'react';
import { FlowCodeErrorBoundary } from './errors/FlowCodeErrorBoundary';
import { FlowCodeHeadline } from './FlowCodeHeadline';
import { ColorList } from './ColorList';

export function FlowCode(props) {
	
	return (
		<div className="container">
			
			<FlowCodeErrorBoundary>
				
				<FlowCodeHeadline onClick={props.startOver} selectedColor={props.selectedColor} />
			
			</ FlowCodeErrorBoundary>
			
			<FlowCodeErrorBoundary>
				
				<ColorList changeColor={props.changeColor} colors={props.colors} hash={props.hash}/>
			
			</ FlowCodeErrorBoundary>
		
		</div>
	);
}