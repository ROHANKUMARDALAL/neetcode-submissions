class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // Step 1: Array ko ascending order mein sort karo
        nums.sort((a, b) => a - b);
        const result = [];

        // Step 2: Pehle element (nums[i]) ko fix karne ke liye loop
        for (let i = 0; i < nums.length - 2; i++) {
            // Agar pehla number hi > 0 ho gaya, toh aage 3 positive numbers ka sum 0 kabhi nahi ban sakta
            if (nums[i] > 0) {
                break;
            }

            // Duplicate i ko skip karo (same triplet dobara banne se rokne ke liye)
            if (i > 0 && nums[i] === nums[i - 1]) {
                continue;
            }

            // Step 3: Two Pointers setup (nums[i] ke aage wale hisse par)
            let left = i + 1;
            let right = nums.length - 1;

            while (left < right) {
                const total = nums[i] + nums[left] + nums[right];

                if (total === 0) {
                    // Valid triplet mil gaya -> 2D array me push karo
                    result.push([nums[i], nums[left], nums[right]]);

                    // Match milne ke baad pointers aage badhao
                    left++;
                    right--;

                    // Duplicate left numbers ko skip karo
                    while (left < right && nums[left] === nums[left - 1]) {
                        left++;
                    }

                    // Duplicate right numbers ko skip karo
                    while (left < right && nums[right] === nums[right + 1]) {
                        right--;
                    }
                } else if (total < 0) {
                    // Sum chhota hai -> bada number chahiye
                    left++;
                } else {
                    // Sum bada hai -> chhota number chahiye
                    right--;
                }
            }
        }

        return result;
    }
}