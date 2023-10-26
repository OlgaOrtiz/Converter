//this function will verify is user's input is really a number or not
// stradegy:
// 1. We will format user's input by replacing the , to .
// 2. using this formatted input value we will verify if the input is a number by using isNaN()
// 3. if it's actually a number return true
// 4. if it's not return false
export function isValidInput (inputValue) {
    const formattedInput = inputValue.replace(',', '.');
    // if (isNaN(formattedInput)) {
    //     return false;
    // } else {
    //     return true;
    // }

    //better
    return !isNaN(formattedInput);
}