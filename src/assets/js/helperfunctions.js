const createRandomRGB = () => {

	const numOne = Math.floor(Math.random()*266),
	  numTwo = Math.floor(Math.random()*266),
	  numThree = Math.floor(Math.random()*266),
	  newRGB = `rgb(${numOne},${numTwo},${numThree})`;
	
	return newRGB;
}

export const createFiftyRandomColors = () => {
	
	let colors = [];
	
	for(let i = 0; i < 50; i++) {
		
		const newRGB = createRandomRGB();
		colors.push(newRGB);
	}
	
	return colors;
}
