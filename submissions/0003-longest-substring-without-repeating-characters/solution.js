/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
   
    let count = 0 
    let set = new Set()
    let i=0,j=0
    while (i<s.length){
        if(set.has(s[i])){
            set.delete(s[j])
            j++
        }
        else{
        set.add(s[i])
        count=Math.max(count,set.size)
        i++}
    }
    return count
};
