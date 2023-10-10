//Well naming convention for variable names and function names :)
//Nice try using the debugger
// hint: use console.log for debugging
//TODO: We only get the nesessary HTML elements into the JS
// Review the id of the HTML element's again and listen the CHANGE event to the CORRECT element
// Assign the function to the CORRECT event listener....


const convertibleMeasure = document.querySelector("#convertible");
// this is the text of the input measurement in a p element
const inputMeasurement = document.querySelector("#input");
// this is our FROM dropdown
const fromMeasurement = document.querySelector("#from");
// this is the element to change the measures of "from" and "to" between them
const arrow = document.querySelector("#arrow");
// this is our TO dropdown
const toMeasurement = document.querySelector("#to");
// this is the conversion button
const convertButton = document.querySelector("#button");
// this is the result output
const resultMeasure = document.querySelector("#result");
// this is the text of the output measurement in a p element
const outputMeasurement = document.querySelector("#output");
// this is the temporary element for the arrow change
const tempMeasure = [];

// this is default value for the input and output measurements
inputMeasurement.textContent = fromMeasurement.value;
outputMeasurement.textContent = toMeasurement.value;


arrow.addEventListener("click", function changeMeasurements(){
    tempMeasure.value = fromMeasurement.value;
    fromMeasurement.value = toMeasurement.value;
    inputMeasurement.textContent = fromMeasurement.value;
    toMeasurement.value = tempMeasure.value;
    outputMeasurement.textContent = toMeasurement.value;

});

fromMeasurement.addEventListener("change", function changeInput(){
    inputMeasurement.textContent = fromMeasurement.value;
});

//this is the To dropdown event listener, same reason as above
toMeasurement.addEventListener("change", function changeOutput(){
    outputMeasurement.textContent = toMeasurement.value;
});

convertButton.addEventListener("click", function convert(){
    if (inputMeasurement.textContent == "lb" && outputMeasurement.textContent == "kg"){
        resultMeasure.textContent = parseInt(convertibleMeasure.value) * 0.4535;
    } else if (inputMeasurement.textContent == "lb" && outputMeasurement.textContent == "t"){
        resultMeasure.textContent = parseInt(convertibleMeasure.value) * 0.0004;
    } else if (inputMeasurement.textContent == "kg" && outputMeasurement.textContent == "lb"){
        resultMeasure.textContent = parseInt(convertibleMeasure.value) * 2.2046;
    } else if (inputMeasurement.textContent == "kg" && outputMeasurement.textContent == "t"){
        resultMeasure.textContent = parseInt(convertibleMeasure.value) / 1000;
    } else if (inputMeasurement.textContent == "t" && outputMeasurement.textContent == "kg"){
        resultMeasure.textContent = parseInt(convertibleMeasure.value) * 1000;
    } else if (inputMeasurement.textContent == "t" && outputMeasurement.textContent == "lb"){
        resultMeasure.textContent = parseInt(convertibleMeasure.value) * 2204.6226;
    } else if (inputMeasurement.textContent == "m" && outputMeasurement.textContent == "ft"){
        resultMeasure.textContent = parseInt(convertibleMeasure.value) * 3.2808;
    } else if (inputMeasurement.textContent == "m" && outputMeasurement.textContent == "yd"){
        resultMeasure.textContent = parseInt(convertibleMeasure.value) * 1.0936;
    } else if (inputMeasurement.textContent == "ft" && outputMeasurement.textContent == "m"){
        resultMeasure.textContent = parseInt(convertibleMeasure.value) * 0.3048;
    } else if (inputMeasurement.textContent == "ft" && outputMeasurement.textContent == "yd"){
        resultMeasure.textContent = parseInt(convertibleMeasure.value) * 0.3333;
    } else if (inputMeasurement.textContent == "yd" && outputMeasurement.textContent == "m"){
        resultMeasure.textContent = parseInt(convertibleMeasure.value) * 0.9144;
    } else if (inputMeasurement.textContent == "yd" && outputMeasurement.textContent == "ft"){
        resultMeasure.textContent = parseInt(convertibleMeasure.value) * 3;
    } else if (inputMeasurement.textContent == "C" && outputMeasurement.textContent == "F"){
        resultMeasure.textContent = (parseInt(convertibleMeasure.value) * 9 / 5) + 32 ;
    } else if (inputMeasurement.textContent == "C" && outputMeasurement.textContent == "K"){
        resultMeasure.textContent = parseInt(convertibleMeasure.value) + 273.15;
    } else if (inputMeasurement.textContent == "F" && outputMeasurement.textContent == "C"){
        resultMeasure.textContent = (parseInt(convertibleMeasure.value) - 32) * 5 / 9;
    } else if (inputMeasurement.textContent == "F" && outputMeasurement.textContent == "K"){
        resultMeasure.textContent = (parseInt(convertibleMeasure.value) - 32) * 5 / 9 + 273.15;
    } else if (inputMeasurement.textContent == "K" && outputMeasurement.textContent == "C"){
        resultMeasure.textContent = parseInt(convertibleMeasure.value) - 273.15;
    } else if (inputMeasurement.textContent == "K" && outputMeasurement.textContent == "F"){
        resultMeasure.textContent = (parseInt(convertibleMeasure.value) - 273.15) * 9 / 5 + 32;
    }
})