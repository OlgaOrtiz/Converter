export async function getCurrenciesFromEuro() {
    try {
        const euroResponse = await fetch('https://my-json-server.typicode.com/Yifei-G/neko-converter-currency-rate/euro');
        return euroResponse.json();
    } catch (error) {
        console.log(error);
    }
}

export async function getCurrenciesFromDollar() {
    try {
        const dollarResponse = await fetch('https://my-json-server.typicode.com/Yifei-G/neko-converter-currency-rate/dollar');
        return dollarResponse.json();
    } catch (error) {
        console.log(error);
    }
}

export async function getCurrenciesFromPound() {
    try {
        const poundResponse = await fetch('https://my-json-server.typicode.com/Yifei-G/neko-converter-currency-rate/pound');
        return poundResponse.json();
    } catch (error) {
        console.log(error);
    }
}