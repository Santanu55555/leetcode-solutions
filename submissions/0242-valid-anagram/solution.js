/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
   
   if(s.length==t.length){
            let obj={},obj1={}
        s.split("").map((e)=>obj[e]?obj[e]++:obj[e]=1)
           t.split("").map((e)=>obj1[e]?obj1[e]++:obj1[e]=1)
    
    flag=true
       for(let key in obj1){
        if(obj[key] != obj1[key]){
            flag=false
          return false
        }
      
    }
      return flag?true:false
   }
       else{
           return false
       }
   
    
       
    
   
};
