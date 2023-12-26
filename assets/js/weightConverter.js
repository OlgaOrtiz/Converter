export function lbToKilo (inputValue) {
    return (parseFloat(inputValue.replace(",",".")) * 0.4535).toFixed(3);
}

export function lbToTon  (inputValue) {
    return (parseFloat(inputValue.replace(",", ".")) * 0.0004).toFixed(3);
}

export function kgToPound (inputValue) {
    return (parseFloat(inputValue.replace(",", ".")) * 2.2046).toFixed(3);
}

export function kgToTon (inputValue) {
    return (parseFloat(inputValue.replace(",", ".")) / 1000).toFixed(3);
}

export function tToKilo (inputValue) {
    return (parseFloat(inputValue.replace(",", ".")) * 1000).toFixed(3);
}

export function tToPound (inputValue) {
    return (parseFloat(inputValue.replace(",", ".")) * 2204.6226).toFixed(3);
}