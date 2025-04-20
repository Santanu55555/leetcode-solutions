/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let start=0
    let currentNum=1
    let end = arr.length 
    let missingNum= 0
    while(start<end){
        if(arr[start]==currentNum){
            start++
        }
        else{
            missingNum++
            if(missingNum == k){
                return currentNum
            }
        }        
            currentNum++
    }
    return (currentNum-missingNum-1 )+ k
};
