// Define the function with TypeScript type annotations
function checkOddEven(num: number): string {
    if (num % 2 === 0) {
        return 'Even';
    } else {
        return 'Odd';
    }
}

// Test the function
const numberToCheck = 3;
const result = checkOddEven(numberToCheck);
console.log(`${numberToCheck} is an ${result} number.`);