function findMinMax() {
    var Arr = [50, 60, 20, 10, 40];
    var minValue = Infinity;
    var maxValue = -1;
    for (var _i = 0, Arr_1 = Arr; _i < Arr_1.length; _i++) {
        var item = Arr_1[_i];
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
