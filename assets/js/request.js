
export async function getCurrenciesFromEuro() {
    try {
        const myRequestResponse = await fetch('http://localhost:3000/euro');
        return myRequestResponse.json();
    } catch (error) {
        console.log(error);
    }
}