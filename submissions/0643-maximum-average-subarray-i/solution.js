/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let max=-Infinity;
    for(let i=0;i<=(nums.length-k);i++){
        let sum=0;
        for(let j=i;j<(i+k);j++){
            sum+=nums[j];
        }
        if(max<(sum/k)){
            max=sum/k;
        }
    }
    return max;
    
};
