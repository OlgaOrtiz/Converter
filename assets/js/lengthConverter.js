export function mToFeet (inputValue) {
    return parseFloat(inputValue.replace(",",".")) * 3.2808;
}

export function mToYard (inputValue) {
    return parseFloat(inputValue.replace(",",".")) * 1.0936;
}

export function ftToMeter (inputValue) {
    return parseFloat(inputValue.replace(",",".")) * 0.3048;
}

export function ftToYard (inputValue) {
    return parseFloat(inputValue.replace(",",".")) * 0.3333;
}

export function ydToMeter (inputValue) {
    return parseFloat(inputValue.replace(",",".")) * 0.9144;
}

export function ydToFeet (inputValue) {
    return parseFloat(inputValue.replace(",",".")) * 3;
}