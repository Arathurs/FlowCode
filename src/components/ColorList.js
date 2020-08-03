import React from 'react';
import { Color } from './Color';

export function ColorList(props) {
	return props.colors.map((color, i) => <Color ref={props.hash[color]} key={'color_'+i} color={color} selected={props.selectedColor} onClick={props.changeColor}/>);
}