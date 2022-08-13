/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
//     arr.map((e)=>
//             if(e!==0){
//         return true;
//         else{
            
//         }
//     }
           // )
//    let  max=0
//    let flag=true
//     for(let i=0;i<arr.length;i++){
// if(arr[i]==0 ){
//     let zero=1
//     for(let j=i;j<0;j--){
//         if(arr[j]!=0){
//             if(arr[j]<=zero){
//                 flag=false
//             }
//         }
//         else{
//             zero++
//         }
//     }
// }
//     }
//     return flag
    // flag? console.log("true") :console.log("false")
      var len = nums.length;
  var max = 0;
  for (var i = 0; i < len; i++) {
    if (i>max) return false;
    max = Math.max(max, i + nums[i]);
  }
  return true;
};
