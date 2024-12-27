


// get triangle base value 
function calculateArea(){

const triagnleBase = document.getElementById('triangle-base')
const triangleText = triagnleBase.value;
const base = parseFloat(triangleText)
// console.log(base)

// get triangle height value
const triangleHeight = document.getElementById('triangle-height');
const triangleText2 = triangleHeight.value;
const height = parseFloat(triangleText2)
// console.log(height)


// calculate triangle area
const area = 0.5 * base * height
//  console.log('area of the triangle is', area)


// display triangle area
const triangleAreaSpan = document.getElementById('triangle-area');
triangleAreaSpan.innerText = area


}


// get rectangle value;
function calculateLw(){

	// get length
const rectangle = document.getElementById('length')
const rectangleText = rectangle.value;
const length = parseFloat(rectangleText)
// console.log( length)

// get width
const rectangleWidth = document.getElementById('width')
const rectangleText2 = rectangleWidth.value;
const width = parseFloat(rectangleText2)
// console.log(width)

// functionality
const areaA = length * width;
console.log(areaA)

const reactangleArea = document.getElementById('rectangle-area')
reactangleArea.innerText = areaA;

}


// get Parallelogram value;
function parallelogram(){
	
	const parallelogramBase = document.getElementById('base')
	const parallelogramArea = parallelogramBase.value;
	const base = parseFloat(parallelogramArea)
	// console.log(base)

	const parallelogramHeight = document.getElementById('height')
	const parallelogramArea1 = parallelogramHeight.value;
	const height = parseFloat(parallelogramArea1);
	// console.log(height)

	const area = base * height

	const parallelogramAr = document.getElementById('parallelogram-area');
	parallelogramAr.innerText = area;


}

