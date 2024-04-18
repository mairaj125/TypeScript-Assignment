// Define the function with TypeScript type annotations
function checkOddEven(num) {
    if (num % 2 === 0) {
        return 'Even';
    }
    else {
        return 'Odd';
    }
}
// Test the function
var numberToCheck = 3;
var result = checkOddEven(numberToCheck);
console.log("".concat(numberToCheck, " is an ").concat(result, " number."));
