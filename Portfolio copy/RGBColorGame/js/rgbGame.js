var numSquares = 6;
var colors = generateRandomColors(numSquares);
		//Select all square classes
var squares = document.querySelectorAll(".square");
	//var that equals 3 item in array
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
// messgae display color of squares
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
// ^^^^^ All Variables are store ^^^^^

easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
		}
});

// RESET BUTTON
resetButton.addEventListener("click", function(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	this.textContent = "New Colors"

	messageDisplay.textContent = "";

	//change colors of squares via (for-loop)
	for(var i = 0; i < squares.length; i++){
			squares[i].style.background = colors[i];
		// For Loop ^^^^
	}
	h1.style.background = "steelblue";

})



		//Display the content to id from #array 3
colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.background = colors[i];

	//add click event listeners to All squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.background;
		//compare color to pickedColor
		console.log(clickedColor, pickedColor);
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?"
			changeColors(clickedColor);
			h1.style.background = clickedColor;
	}	  else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
		
	});
}

function changeColors(color){
	//loop through all squares
	for (var i = 0; i < squares.length; i++){
		//change each color to match given color
		squares[i].style.background = color;
	}
		
}

function pickColor (){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = []
	//repeat num times
	for(var i = 0; i < num; i++){
		//get random color then push into array
		arr.push(randomColor())
		
	}
	//return that array
	return arr;
}
	///Generate 3 sets of random color/number
function randomColor (){
	//pick a "red" from 0-255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0-255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0-255
	var b = Math.floor(Math.random() * 256);
	// return a random rgb(color) number, combine var r,g,b
	return "rgb(" + r + ", " + g + ", " + b + ")";

}