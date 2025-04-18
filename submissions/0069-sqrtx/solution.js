/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x === 0 || x === 1) return x;
    
    let start = 1;
    let end = x;
    let result = 0;
    
    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        
        if (middle * middle === x) {
            return middle;
        }
        
        if (middle * middle < x) {
            start = middle + 1;
            result = middle; // Store the floor value
        } else {
            end = middle - 1;
        }
    }
    
    return result;
};
