const convertibleMeasure = document.querySelector("#convertible");
const inputMeasurment = document.querySelector("#input");
const fromMeasurement = document.querySelector("#from");
const arrow = document.querySelector("#arrow");
const toMeasurement = document.querySelector("#to");
const convertButton = document.querySelector("#button");
const resultMeasure = document.querySelector("#result");
const outputMeasurement = document.querySelector("#output");

inputMeasurment.textContent = fromMeasurement.value;
outputMeasurement.textContent = toMeasurement.value;

arrow.addEventListener("click", changeMeasurements);
fromMeasurement.addEventListener("change", changeInput);
toMeasurement.addEventListener("change", changeOutput);


function changeMeasurements (){
    /*const tempMeasure = fromMeasurement.value;
    fromMeasurement.value = inputMeasurment.value;*/

}

function changeInput (){
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