var searchInsert = function(nums, target) {
    let left = 0
    let right = nums.length
        while (left<right) {
        let middle = Math.floor((left + right) / 2);
         (nums[middle] < target)?left = middle + 1:right = middle
         }
    return left;
}
