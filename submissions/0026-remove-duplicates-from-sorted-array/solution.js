/**
 * @param {number[]} nums
 * @return {number}
 */var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;  // Handle empty array case
    
    let i = 0, j = 1, k = 0;
    
    while (j < nums.length) {
        if (nums[i] === nums[j]) {
            j++;                            
        } else {
            nums[k] = nums[i];
            i = j;
            k++;
            j++;
        }
    }
    
    nums[k] = nums[i];
    k++;
    
    return k;
};
