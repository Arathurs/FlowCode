import React from 'react';
import { createFiftyRandomColors } from '../assets/js/helperfunctions'; 
import { FlowCodeErrorBoundary } from './errors/FlowCodeErrorBoundary';
import { FlowCode } from './FlowCode';

export class FlowCodeContainer extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
			colors: [],
			initialized: false,
			selectedColor: null,
			hash: {}
		};
		
		this.changeColor = this.changeColor.bind(this);
		this.removeColor = this.removeColor.bind(this);
		this.startOver = this.startOver.bind(this);
	}
	
	getAllReferences(colors) {
		let colorObj = {}
		for(let i = 0; i < colors.length; i++) {
			const color = colors[i];
			colorObj[color] = React.createRef();
			
		}
		
		return colorObj;
	}
	
	componentDidMount() {
		
		if(!this.state.initialized) {
			const colors = createFiftyRandomColors(),
			      colorReferences = this.getAllReferences(colors);		
			
			this.setState({
				colors: colors,
				initialized: true,
				hash: colorReferences
			});
					
		}
	}
	
	removeColor() {
		
		const refNode = this.state.hash[this.state.selectedColor].current;
		refNode.deselect();
	}
	
	changeColor(newColor) {
		
		const refNode = this.state.hash[newColor].current;
		if(this.state.selectedColor) {
			
			this.removeColor();
			refNode.select();
			this.setState({
				selectedColor: newColor
			});
			
		} else {
			
			refNode.select();
			this.setState({	
				selectedColor: newColor
			});
		}
	}
	
	startOver() {
		
		const colors = createFiftyRandomColors(),
		      colorReferences = this.getAllReferences(colors);		
		this.setState({
			colors: colors,
			initialized: true,
			selectedColor:null,
			hash: colorReferences
		});	
	}
	
	
	
	render() {
       
	    return (
			<FlowCodeErrorBoundary>
				<FlowCode startOver={this.startOver} selectedColor={this.state.selectedColor} colors={this.state.colors} hash={this.state.hash} changeColor={this.changeColor} />
			</ FlowCodeErrorBoundary>
        );   
    }

}