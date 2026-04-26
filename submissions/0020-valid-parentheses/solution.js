/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let obj = {
        '(': ')',
        '{': '}',
        '[': ']',
    }
    let stack =[]
    for(let i=0;i<s.length;i++){
        let currentCharacter = s[i]
        if(obj[currentCharacter]){
            stack.push(obj[currentCharacter])
        }
       else {
         if (currentCharacter !== stack.pop()) return false; 
         }
    }
    return stack.length===0
};
