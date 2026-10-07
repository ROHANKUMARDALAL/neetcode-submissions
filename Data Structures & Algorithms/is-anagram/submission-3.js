class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!==t.length){
            return false
        }
        const counterMap=new Map();
        for(const char of s){
            if(counterMap.has(char)){
                const oldCount=counterMap.get(char)

                counterMap.set(char, oldCount + 1);
            }
            else{
            counterMap.set(char,1)
            }
        }
   for(const char of t){
            if(counterMap.has(char) &&counterMap.get(char)!==0){
                const currentCount=counterMap.get(char)

                counterMap.set(char, currentCount - 1);
            }
            else{
           return false
            }
        }
return true
    }
}
