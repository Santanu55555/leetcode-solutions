/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   let obj={}
   for( let i=0; i<nums.length;i++){
    let remain = target - nums[i]
    if(obj[remain]!=undefined){
        return [i, obj[remain]]
    }
     obj[nums[i]] = i
   }
};
