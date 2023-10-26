export function lbToKilo (inputValue) {
    return parseFloat(inputValue.replace(",",".")) * 0.4535;
}

export function lbToTon  (inputValue) {
    return parseFloat(inputValue.replace(",", ".")) * 0.0004;
}

export function kgToPound (inputValue) {
    return parseFloat(inputValue.replace(",", ".")) * 2.2046;
}

export function kgToTon (inputValue) {
    return parseFloat(inputValue.replace(",", ".")) / 1000;
}

export function tToKilo (inputValue) {
    return parseFloat(inputValue.replace(",", ".")) * 1000;
}

export function tToPound (inputValue) {
    return parseFloat(inputValue.replace(",", ".")) * 2204.6226;
}