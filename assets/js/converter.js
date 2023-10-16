import { lbToKilo, lbToTon, kgToPound, kgToTon, tToKilo, tToPound } from './weightConverter.js';
import { mToFeet, mToYard, ftToMeter, ftToYard, ydToMeter, ydToFeet } from './lengthConverter.js';
import { CToFahrenheit, CToKelvin, FToCelcius, FToKelvin, KToCelcius, KToFahrenheit } from './temperatureConverter.js';

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
    if (isNaN(parseInt(convertibleMeasure.value)) === true){
        resultMeasure.textContent = "Please, check out you have entered the correct data for the conversion";
    } else if (isNaN(parseInt(convertibleMeasure.value)) === false) {
        switch(fromMeasurement.value) {
            // WEIGHT CASES
            case 'lb': {
                if(toMeasurement.value === 'kg') {
                    resultMeasure.textContent = lbToKilo(convertibleMeasure.value);
                } else if (toMeasurement.value === 't') {
                    resultMeasure.textContent = lbToTon(convertibleMeasure.value);
                }
                break;
            }
            case 'kg': {
                if(toMeasurement.value === 'lb') {
                    resultMeasure.textContent = kgToPound(convertibleMeasure.value);
                } else if (toMeasurement.value === 't') {
                    resultMeasure.textContent = kgToTon(convertibleMeasure.value);
                }
                break;
            }
    
            case 't': {
                if(toMeasurement.value === 'kg') {
                    resultMeasure.textContent = tToKilo(convertibleMeasure.value);
                } else if (toMeasurement.value === 'lb') {
                    resultMeasure.textContent = tToPound(convertibleMeasure.value);
                }
                break;
            }
    
            // LENGTH CASES 
            case 'm': {
                if(toMeasurement.value === 'ft') {
                    resultMeasure.textContent = mToFeet(convertibleMeasure.value);
                } else if (toMeasurement.value === 'yd') {
                    resultMeasure.textContent = mToYard(convertibleMeasure.value);
                }
                break;
            }
    
            case 'ft': {
                if(toMeasurement.value === 'm') {
                    resultMeasure.textContent = ftToMeter(convertibleMeasure.value);
                } else if (toMeasurement.value === 'yd') {
                    resultMeasure.textContent = ftToYard(convertibleMeasure.value);
                }
                break;
            }
    
            case 'yd': {
                if(toMeasurement.value === 'm') {
                    resultMeasure.textContent = ydToMeter(convertibleMeasure.value);
                } else if (toMeasurement.value === 'ft') {
                    resultMeasure.textContent = ydToFeet(convertibleMeasure.value);
                }
                break;
            }
    
            // TEMPERATURE CASES
            case 'ºC': {
                if(toMeasurement.value === 'ºF') {
                    resultMeasure.textContent = CToFahrenheit(convertibleMeasure.value);
                } else if (toMeasurement.value === 'ºK') {
                    resultMeasure.textContent = CToKelvin(convertibleMeasure.value);
                }
                break;
            }
    
            case 'ºF': {
                if(toMeasurement.value === 'ºC') {
                    resultMeasure.textContent = FToCelcius(convertibleMeasure.value);
                } else if (toMeasurement.value === 'ºK') {
                    resultMeasure.textContent = FToKelvin(convertibleMeasure.value);
                }
                break;
            }
    
            case 'ºK': {
                if(toMeasurement.value === 'ºC') {
                    resultMeasure.textContent = KToCelcius(convertibleMeasure.value);
                } else if (toMeasurement.value === 'ºF') {
                    resultMeasure.textContent = KToFahrenheit(convertibleMeasure.value);
                }
                break;
            }
    
            default: {
                console.log('Error happened....');
            }
        }
    };
})