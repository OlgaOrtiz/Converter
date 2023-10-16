export function CToFahrenheit (inputValue) {
    return (parseFloat(inputValue) * 9 / 5) + 32;
}

export function CToKelvin (inputValue) {
    return parseFloat(inputValue) + 273.15;
}

export function FToCelcius (inputValue) {
    return (parseFloat(inputValue) - 32) * 5 / 9;
}

export function FToKelvin (inputValue) {
    return (parseFloat(inputValue) - 32) * 5 / 9 + 273.15;
}

export function KToCelcius (inputValue) {
    return parseFloat(inputValue) - 273.15;
}

export function KToFahrenheit (inputValue) {
    return (parseFloat(inputValue) - 273.15) * 9 / 5 + 32;
}