/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
      const map = {
        '(': ')',
        '{': '}',
        '[': ']',
    }
    
    let stack = [];
    
    for (let i = 0; i < s.length; i++) {
        const currentCharacter = s[i];
        
        if (map[currentCharacter]) {
            stack.push(map[currentCharacter])
        }
        else {
            if (currentCharacter !== stack.pop()) return false;
        }
    }
    
    return stack.length === 0;
}
