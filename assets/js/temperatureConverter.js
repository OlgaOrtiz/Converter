export function CToFahrenheit (inputValue) {
    return ((parseFloat(inputValue.replace(",",".")) * 9 / 5) + 32).toFixed(3);
}

export function CToKelvin (inputValue) {
    return (parseFloat(inputValue.replace(",",".")) + 273.15).toFixed(3);
}

export function FToCelcius (inputValue) {
    return ((parseFloat(inputValue.replace(",",".")) - 32) * 5 / 9).toFixed(3);
}

export function FToKelvin (inputValue) {
    return ((parseFloat(inputValue.replace(",",".")) - 32) * 5 / 9 + 273.15).toFixed(3);
}

export function KToCelcius (inputValue) {
    return (parseFloat(inputValue.replace(",",".")) - 273.15).toFixed(3);
}

export function KToFahrenheit (inputValue) {
    return ((parseFloat(inputValue.replace(",",".")) - 273.15) * 9 / 5 + 32).toFixed(3);
}