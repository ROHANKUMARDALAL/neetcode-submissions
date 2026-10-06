class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let startPointer=0;
        let endPointer=numbers.length-1;
        while(startPointer<endPointer){
            let sum= numbers[startPointer]+numbers[endPointer];
           if(sum==target){
            return[startPointer+1,endPointer+1]
        }
        if(sum<target){
            startPointer++
        }
        if(sum>target){
            endPointer--;
        }
    }}
}
