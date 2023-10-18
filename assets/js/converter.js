import { lbToKilo, lbToTon, kgToPound, kgToTon, tToKilo, tToPound } from './weightConverter.js';
import { mToFeet, mToYard, ftToMeter, ftToYard, ydToMeter, ydToFeet } from './lengthConverter.js';
import { CToFahrenheit, CToKelvin, FToCelcius, FToKelvin, KToCelcius, KToFahrenheit } from './temperatureConverter.js';
import { isValidInput } from './validation.js';


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
    if (isValidInput(convertibleMeasure.value)) {
        const formattedInput = convertibleMeasure.value.replace(',', '.');
        switch(fromMeasurement.value) {
            // WEIGHT CASES
            case 'lb': {
                if(toMeasurement.value === 'kg') {
                    resultMeasure.textContent = lbToKilo(formattedInput);
                } else if (toMeasurement.value === 't') {
                    resultMeasure.textContent = lbToTon(formattedInput);
                }
                break;
            }
            case 'kg': {
                if(toMeasurement.value === 'lb') {
                    resultMeasure.textContent = kgToPound(formattedInput);
                } else if (toMeasurement.value === 't') {
                    resultMeasure.textContent = kgToTon(formattedInput);
                }
                break;
            }
    
            case 't': {
                if(toMeasurement.value === 'kg') {
                    resultMeasure.textContent = tToKilo(formattedInput);
                } else if (toMeasurement.value === 'lb') {
                    resultMeasure.textContent = tToPound(formattedInput);
                }
                break;
            }
    
            // LENGTH CASES 
            case 'm': {
                if(toMeasurement.value === 'ft') {
                    resultMeasure.textContent = mToFeet(formattedInput);
                } else if (toMeasurement.value === 'yd') {
                    resultMeasure.textContent = mToYard(formattedInput);
                }
                break;
            }
    
            case 'ft': {
                if(toMeasurement.value === 'm') {
                    resultMeasure.textContent = ftToMeter(formattedInput);
                } else if (toMeasurement.value === 'yd') {
                    resultMeasure.textContent = ftToYard(formattedInput);
                }
                break;
            }
    
            case 'yd': {
                if(toMeasurement.value === 'm') {
                    resultMeasure.textContent = ydToMeter(formattedInput);
                } else if (toMeasurement.value === 'ft') {
                    resultMeasure.textContent = ydToFeet(formattedInput);
                }
                break;
            }
    
            // TEMPERATURE CASES
            case 'ºC': {
                if(toMeasurement.value === 'ºF') {
                    resultMeasure.textContent = CToFahrenheit(formattedInput);
                } else if (toMeasurement.value === 'ºK') {
                    resultMeasure.textContent = CToKelvin(formattedInput);
                }
                break;
            }
    
            case 'ºF': {
                if(toMeasurement.value === 'ºC') {
                    resultMeasure.textContent = FToCelcius(formattedInput);
                } else if (toMeasurement.value === 'ºK') {
                    resultMeasure.textContent = FToKelvin(formattedInput);
                }
                break;
            }
    
            case 'ºK': {
                if(toMeasurement.value === 'ºC') {
                    resultMeasure.textContent = KToCelcius(formattedInput);
                } else if (toMeasurement.value === 'ºF') {
                    resultMeasure.textContent = KToFahrenheit(formattedInput);
                }
                break;
            }    
            default: {
                console.log('Error happened....');
            }
        }
    } else {
        // we handle the validation error
        console.log('The input is not a valid number!');
        resultMeasure.textContent = 'The input is not a valid number'
    }
})