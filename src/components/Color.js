import React from 'react';

export class Color extends React.Component {
  	constructor(props) {
		super(props);
		this.state = { open: false};
		
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
		
		e.preventDefault();
		const newColor = this.props.color
		this.props.onClick(newColor);
		
	}
	
	shouldComponentUpdate(prevState) {
		
		return prevState.open !== this.state.open;
	}
	
	render() {
        
		return <div className={this.state.open ? 'color select' : 'color'} style={{backgroundColor: this.props.color}} onClick={this.handleClick} />;
    
	}
}