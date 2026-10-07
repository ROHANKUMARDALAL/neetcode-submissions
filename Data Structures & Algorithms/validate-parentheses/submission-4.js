class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
     const stack=[];
     if(s.length%2!==0){
return false;
     }
     for(const char of s){
        if(char =='(' ||char =='{' || char=='['){
            stack.push(char);
        }
        else {
            if (stack.length == 0) {
                    return false;
                }
                else{
                    const top=stack.pop();
                    if(char ==')' && top!=='('){
                        return false
                    }
                      if(char =='}' && top!=='{'){
                        return false
                    }  if(char ==']' && top!=='['){
                        return false
                    }
              
                }
        }

     }
     if(stack.length==0){
     return true;}
     return false
    }
}
