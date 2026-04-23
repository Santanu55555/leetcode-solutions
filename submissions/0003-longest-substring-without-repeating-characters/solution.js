/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let longestcount = 0
    let set = new Set()
    let right = 0, left = 0
    while( right<s.length){
        if(!set.has(s[right])){
            set.add(s[right])
            longestcount = Math.max(longestcount, right - left + 1)
            right++
        }
        else{
        set.delete(s[left])
        left++
        }
    }
    return longestcount;
};
