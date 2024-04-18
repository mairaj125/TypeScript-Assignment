// Function to calculate the area of a circle given its radius
function calculateCircleArea(radius: number): number {
    // Using the Math.PI constant to get the value of π
    return Math.PI * radius * radius;
}

// Testing the function
const circleRadius: number = 7;
console.log(`The area of a circle with radius ${circleRadius} is: ${calculateCircleArea(circleRadius).toFixed(2)}`);