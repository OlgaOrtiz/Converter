export function CToFahrenheit (inputValue) {
    return (parseInt(inputValue) * 9 / 5) + 32;
}

export function CToKelvin (inputValue) {
    return parseInt(inputValue) + 273.15;
}

export function FToCelcius (inputValue) {
    return (parseInt(inputValue) - 32) * 5 / 9;
}

export function FToKelvin (inputValue) {
    return (parseInt(inputValue) - 32) * 5 / 9 + 273.15;
}

export function KToCelcius (inputValue) {
    return parseInt(inputValue) - 273.15;
}

export function KToFahrenheit (inputValue) {
    return (parseInt(inputValue) - 273.15) * 9 / 5 + 32;
}