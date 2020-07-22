import React from 'react';

export class Color extends React.Component {
  	constructor(props) {
		super(props);
		
		this.state = {
			
			open: false
		};
		
		this.deselect = this.deselect.bind(this);
		this.select = this.select.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}
	
	deselect() {
		
		this.setState({
			
			open: false
			
		});
		
		
	}
	
	select() {
		
		
		this.setState({
			
			open: true
			
		});
	}
	
	handleClick(e) {
		const newColor = this.props.color
		console.log(newColor);
		//console.log();
		this.props.onClick(newColor);
		e.preventDefault();
		
	}
	
	render() {
        
		
		//const className = this.props.color === this.props.selected ? 'select' : '',
		//  completedClassName = `color ${className}`; 
		//let colorRef = this[this.props.color];
		//console.log('render colorRef: ',colorRef);
		if(this.state.open) {
			
			return <div className='color select' style={{backgroundColor: this.props.color}} onClick={this.handleClick}></div>;
			
		} else {
			
			return <div className='color' style={{backgroundColor: this.props.color}} onClick={this.handleClick}></div>;
			
		}
		
		//return <div ref={this.props.color} className={completedClassName} style={{backgroundColor: this.props.color}} /*onClick={this.handleClick}></div>;
    }
}