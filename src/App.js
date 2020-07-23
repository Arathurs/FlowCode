import React from 'react';
import './App.css';
import { createFiftyRandomColors } from './assets/helperfunctions';
import { FlowCodeContainer } from './components/FlowCodeContainer';

class App extends React.Component {
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
		
		console.log(this.state.selectedColor,this.state.hash,'remove color');
		const refNode = this.state.hash[this.state.selectedColor].current;
		refNode.deselect();
				
	}
	
	changeColor(newColor) {
		
		const refNode = this.state.hash[newColor].current;
		console.log('change color refNode: ',refNode);
		if(this.state.selectedColor) {
			console.log('change color selectedColor: ',refNode);
			this.removeColor();
			refNode.select();
			this.setState({
				
				selectedColor: newColor
			
			});
			
		} else {
			console.log('change color not selectedColor: ',refNode);
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
       
	    return <FlowCodeContainer onClick={this.startOver} selectedColor={this.state.selectedColor} colors={this.state.colors} hash={this.state.hash} onClick2={this.changeColor} />;
            
    }

}

export default App;
