// fucntion for Farenheit converter
function fahr(userInt, degreeType) { //pass in 2 parameters, one for the user input and the user's selected degree type to convert.
let temp = userInt; // declare temperature and hold the value of userInput. 
switch (degreeType) {
case 'C':
temp = eval((userInt - 32) * (5 / 9));
break;
case 'K':
temp = eval((userInt + 459.67) * (5 / 9));
break;
}
return temp; //If the same degree type is selected, this will display the value as the user input. why am I explaining such obvious things lol
}


// fucntion for celcius converter, just the same as the fahr function but with different formulas
function cel(userInt, degreeType) {
let temp = userInt;
switch (degreeType) {
case 'F':
temp = eval((userInt * (9 / 5)) + 32);
break;
case 'K':
temp = eval(userInt + 273.15);
break;
}
return temp;
}

// fucntion for kelvin converter
function kel(userInt, degreeType) {
let temp = userInt;
switch (degreeType) {
case 'F':
temp = eval((userInt - 273.15) * (9 / 5) + 32);
break;
case 'C':
temp = eval((userInt - 273.15));
break;
}
return temp;
}

//for the Button function.
$('form').submit(function (event) {
displayResult()
event.preventDefault(); // to prevent the page restarting everytime the submit button is pressed
});


function displayResult() {
let userInput = parseInt($('#userInput').val());
let userIntDegree = $('#userIntDegree').val();
let convert = $('#convert').val();
let resultValue = "";

switch (userIntDegree) {
case "C":
resultValue = cel(userInput, convert);
break;
case "F":
resultValue = fahr(userInput, convert);
break;
case "K":
resultValue = kel(userInput, convert);
break;

}



//Display the correct unit when button is pressed
$('#convertedUnit').text(convert)

//Display the result
if (convert === userIntDegree) {
$('#placeholder-value').text(userInput);
} 
else {
return $('#placeholder-value').text(resultValue.toFixed(2));
}

}