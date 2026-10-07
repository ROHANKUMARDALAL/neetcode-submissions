class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let initialPointer=0;
        let endPointer=nums.length-1;
        while(initialPointer<=endPointer){
        let midPointer=Math.floor((initialPointer + endPointer) / 2);
            if(nums[midPointer]===target){
                return midPointer;
            }
           else if(nums[midPointer]>target){
              endPointer=midPointer-1;
           }
           else if( nums[midPointer]<target){
              initialPointer=midPointer+1;
           }
        }
        return -1;
    }
}
