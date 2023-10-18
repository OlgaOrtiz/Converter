import { lbToKilo, lbToTon, kgToPound, kgToTon, tToKilo, tToPound } from './weightConverter.js';
import { mToFeet, mToYard, ftToMeter, ftToYard, ydToMeter, ydToFeet } from './lengthConverter.js';
import { CToFahrenheit, CToKelvin, FToCelcius, FToKelvin, KToCelcius, KToFahrenheit } from './temperatureConverter.js';
import { checkValidation } from './validation.js';


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

toMeasurement.addEventListener("change", function changeOutput(){
    outputMeasurement.textContent = toMeasurement.value;
});

convertButton.addEventListener("click", function convert(){
    const formattedMeasure = convertibleMeasurement.value.replace(",", ".");

    checkValidation(formattedMeasure.value);

    if (isNaN(parseInt(formattedMeasure.value)) === true){
        resultMeasure.textContent = "Please, check out you have entered the correct data for the conversion";
    } else if (isNaN(parseInt(formattedMeasure.value)) === false) {
        switch(fromMeasurement.value) {
            // WEIGHT CASES
            case 'lb': {
                if(toMeasurement.value === 'kg') {
                    resultMeasure.textContent = lbToKilo(formattedMeasure.value);
                } else if (toMeasurement.value === 't') {
                    resultMeasure.textContent = lbToTon(formattedMeasure.value);
                }
                break;
            }
            case 'kg': {
                if(toMeasurement.value === 'lb') {
                    resultMeasure.textContent = kgToPound(formattedMeasure.value);
                } else if (toMeasurement.value === 't') {
                    resultMeasure.textContent = kgToTon(formattedMeasure.value);
                }
                break;
            }
    
            case 't': {
                if(toMeasurement.value === 'kg') {
                    resultMeasure.textContent = tToKilo(formattedMeasure.value);
                } else if (toMeasurement.value === 'lb') {
                    resultMeasure.textContent = tToPound(formattedMeasure.value);
                }
                break;
            }
    
            // LENGTH CASES 
            case 'm': {
                if(toMeasurement.value === 'ft') {
                    resultMeasure.textContent = mToFeet(formattedMeasure.value);
                } else if (toMeasurement.value === 'yd') {
                    resultMeasure.textContent = mToYard(formattedMeasure.value);
                }
                break;
            }
    
            case 'ft': {
                if(toMeasurement.value === 'm') {
                    resultMeasure.textContent = ftToMeter(formattedMeasure.value);
                } else if (toMeasurement.value === 'yd') {
                    resultMeasure.textContent = ftToYard(formattedMeasure.value);
                }
                break;
            }
    
            case 'yd': {
                if(toMeasurement.value === 'm') {
                    resultMeasure.textContent = ydToMeter(formattedMeasure.value);
                } else if (toMeasurement.value === 'ft') {
                    resultMeasure.textContent = ydToFeet(formattedMeasure.value);
                }
                break;
            }
    
            // TEMPERATURE CASES
            case 'ºC': {
                if(toMeasurement.value === 'ºF') {
                    resultMeasure.textContent = CToFahrenheit(formattedMeasure.value);
                } else if (toMeasurement.value === 'ºK') {
                    resultMeasure.textContent = CToKelvin(formattedMeasure.value);
                }
                break;
            }
    
            case 'ºF': {
                if(toMeasurement.value === 'ºC') {
                    resultMeasure.textContent = FToCelcius(formattedMeasure.value);
                } else if (toMeasurement.value === 'ºK') {
                    resultMeasure.textContent = FToKelvin(formattedMeasure.value);
                }
                break;
            }
    
            case 'ºK': {
                if(toMeasurement.value === 'ºC') {
                    resultMeasure.textContent = KToCelcius(formattedMeasure.value);
                } else if (toMeasurement.value === 'ºF') {
                    resultMeasure.textContent = KToFahrenheit(formattedMeasure.value);
                }
                break;
            }
    
            //todo: complete the switch with all other units....
    
            default: {
                console.log('Error happened....');
            }
        }
    };



    // if (inputMeasurement.textContent === "lb" && outputMeasurement.textContent === "kg"){
    //     resultMeasure.textContent = parseInt(convertibleMeasure.value) * 0.4535;
    // } else if (inputMeasurement.textContent === "lb" && outputMeasurement.textContent === "t"){
    //     resultMeasure.textContent = parseInt(convertibleMeasure.value) * 0.0004;
    // } else if (inputMeasurement.textContent === "kg" && outputMeasurement.textContent === "lb"){
    //     resultMeasure.textContent = parseInt(convertibleMeasure.value) * 2.2046;
    // } else if (inputMeasurement.textContent === "kg" && outputMeasurement.textContent === "t"){
    //     resultMeasure.textContent = parseInt(convertibleMeasure.value) / 1000;
    // } else if (inputMeasurement.textContent === "t" && outputMeasurement.textContent === "kg"){
    //     resultMeasure.textContent = parseInt(convertibleMeasure.value) * 1000;
    // } else if (inputMeasurement.textContent === "t" && outputMeasurement.textContent === "lb"){
    //     resultMeasure.textContent = parseInt(convertibleMeasure.value) * 2204.6226;
    // } else if (inputMeasurement.textContent === "m" && outputMeasurement.textContent === "ft"){
    //     resultMeasure.textContent = parseInt(convertibleMeasure.value) * 3.2808;
    // } else if (inputMeasurement.textContent === "m" && outputMeasurement.textContent === "yd"){
    //     resultMeasure.textContent = parseInt(convertibleMeasure.value) * 1.0936;
    // } else if (inputMeasurement.textContent === "ft" && outputMeasurement.textContent === "m"){
    //     resultMeasure.textContent = parseInt(convertibleMeasure.value) * 0.3048;
    // } else if (inputMeasurement.textContent === "ft" && outputMeasurement.textContent === "yd"){
    //     resultMeasure.textContent = parseInt(convertibleMeasure.value) * 0.3333;
    // } else if (inputMeasurement.textContent === "yd" && outputMeasurement.textContent === "m"){
    //     resultMeasure.textContent = parseInt(convertibleMeasure.value) * 0.9144;
    // } else if (inputMeasurement.textContent === "yd" && outputMeasurement.textContent === "ft"){
    //     resultMeasure.textContent = parseInt(convertibleMeasure.value) * 3;
    // } else if (inputMeasurement.textContent === "C" && outputMeasurement.textContent === "F"){
    //     resultMeasure.textContent = (parseInt(convertibleMeasure.value) * 9 / 5) + 32 ;
    // } else if (inputMeasurement.textContent === "C" && outputMeasurement.textContent === "K"){
    //     resultMeasure.textContent = parseInt(convertibleMeasure.value) + 273.15;
    // } else if (inputMeasurement.textContent === "F" && outputMeasurement.textContent === "C"){
    //     resultMeasure.textContent = (parseInt(convertibleMeasure.value) - 32) * 5 / 9;
    // } else if (inputMeasurement.textContent === "F" && outputMeasurement.textContent === "K"){
    //     resultMeasure.textContent = (parseInt(convertibleMeasure.value) - 32) * 5 / 9 + 273.15;
    // } else if (inputMeasurement.textContent === "K" && outputMeasurement.textContent === "C"){
    //     resultMeasure.textContent = parseInt(convertibleMeasure.value) - 273.15;
    // } else if (inputMeasurement.textContent === "K" && outputMeasurement.textContent === "F"){
    //     resultMeasure.textContent = (parseInt(convertibleMeasure.value) - 273.15) * 9 / 5 + 32;
    // }
})