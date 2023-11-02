export async function getCurrenciesFromEuro() {
    try {
        const euroResponse = await fetch('http://localhost:3000/euro');
        return euroResponse.json();
    } catch (error) {
        console.log(error);
    }
}

export async function getCurrenciesFromDollar() {
    try {
        const dollarResponse = await fetch('http://localhost:3000/dollar');
        return dollarResponse.json();
    } catch (error) {
        console.log(error);
    }
}

export async function getCurrenciesFromPound() {
    try {
        const poundResponse = await fetch('http://localhost:3000/pound');
        return poundResponse.json();
    } catch (error) {
        console.log(error);
    }
}