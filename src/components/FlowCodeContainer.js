import React from 'react';
import '../App.css';
import { FlowCode } from './FlowCode';


export const FlowCodeContainer = props => {
	
	let message;
	if(props.selectedColor) {
		
		message = `You picked ${props.selectedColor}`;
		return <FlowCode onClick={props.onClick} selectedColor={props.selectedColor} colors={props.colors} hash={props.hash} onClick2={props.onClick2} message={message}/>;
				
	} else {
				
		message = 'Choose a Color!';
		return <FlowCode onClick={props.onClick} selectedColor={props.selectedColor} colors={props.colors} hash={props.hash} onClick2={props.onClick2} message={message}/>;
			
	}

};
