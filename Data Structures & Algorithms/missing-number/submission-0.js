class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let missingNumber=0;
        let currentSum=0
        for(let i=0;i<nums.length;i++){
currentSum=currentSum+nums[i];

        }
        let actualSum=nums.length*(nums.length+1)/2;
        missingNumber= actualSum-currentSum;
        return missingNumber;
    }
}
