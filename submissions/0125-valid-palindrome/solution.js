/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let string = s.toLowerCase().replace(/[^a-z0-9]/g,'')
    
    return string==string.split('').reverse().join('')
};
