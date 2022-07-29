/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
//       const is = (left, right) => {
          
          
//     for (let i = left; i <= Math.floor((left + right) / 2); i++) {
//       if (s[i] !== s[right - (i - left)]) {
//         return false
//       }
//     }
//     return true
//   }

      
      
//   for (let i = 0; i <= Math.floor(s.length / 2); i++) {
//     const right = s.length - 1 - i
//     if (s[i] !== s[right]) {
//       return is(i, right - 1) || is(i + 1, right)
//     }
//   }
//   return true
let p1=0;
let p2=s.length-1;
while(p1<p2){
if(s[p1]!==s[p2]){
return validSubPalindrome(s, p1+1, p2) || validSubPalindrome(s, p1, p2-1)
}
else {
p1++;
p2--;
}
}
return true;
};
var validSubPalindrome = function(s, left, right){
while(left<right){
if(s[left]!==s[right])
return false;
left++; right--;
}
return true
}
