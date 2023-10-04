//Well naming convention for variable names and function names :)
//Nice try using the debugger
// hint: use console.log for debugging
//TODO: We only get the nesessary HTML elements into the JS
// Review the id of the HTML element's again and listen the CHANGE event to the CORRECT element
// Assign the function to the CORRECT event listener....


const convertibleMeasure = document.querySelector("#convertible");
//this is a p element, not the input
const inputMeasurment = document.querySelector("#input");
// this is our FROM dropdown
const fromMeasurement = document.querySelector("#from");
// why we need to get the img element into JS?
const arrow = document.querySelector("#arrow");
// this is our TO dropdown
const toMeasurement = document.querySelector("#to");
//this is the conversion button
const convertButton = document.querySelector("#button");
//this is the result output
const resultMeasure = document.querySelector("#result");

const outputMeasurement = document.querySelector("#output");

inputMeasurment.textContent = fromMeasurement.value;
outputMeasurement.textContent = toMeasurement.value;

//If you want to execute the convertion logic by click the arrow, then there's no needs to have the button
//you either use the button or the arrow
//I would use the button for doing to convertion logic, and only use the arrow to improve user experience
arrow.addEventListener("click", changeMeasurements);

//this is the From dropdown event listener, you are changing the dropdown selection, not the input value
// the changeInput function should not be assigned to this event listener
fromMeasurement.addEventListener("change", changeInput);

//this is the To dropdown event listener, same reason as above
toMeasurement.addEventListener("change", changeOutput);


function changeMeasurements (){
    /*const tempMeasure = fromMeasurement.value;
    fromMeasurement.value = inputMeasurment.value;*/

}

function changeInput (){
    //example of debugging with console.log :)
    console.log('I am in the change input');
    inputMeasurment.textContent = fromMeasurement.target.value;
}

function changeOutput (){
    debugger;
    console.log(changeOutput.target.value);
    outputMeasurement.replaceChild(value, changeOutput.target.value);
    /*outputMeasurement.textContent = "${event.target.value}";*/
}

function convert (){
    
}