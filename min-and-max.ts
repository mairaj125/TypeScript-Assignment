function findMinMax() {
    let Arr = [50, 60, 20, 10, 40];
    let minValue = +1;
    let maxValue = -1;
 
    for (let item of Arr) {
 
        // Find minimum value
        if (item < minValue)
            minValue = item;
 
        // Find maximum value
        if (item > maxValue)
            maxValue = item;
    }
 
    console.log("Minimum element is:" + minValue);
    console.log("Minimum element is:" + maxValue);
}
 
findMinMax();