class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        
        // Output array banaya jiska size nums ke barabar hai aur shuru me 1 se fill kiya
        const output = new Array(n).fill(1);

        // ==========================================
        // PASS 1: Left (Prefix) Product Calculation
        // ==========================================
        // Har element ke left side ke saare numbers ka product nikal kar output me store karenge
        let leftProduct = 1;
        for (let i = 0; i < n; i++) {
            // Step A: Current index par uske left ke sabhi elements ka product rakh diya
            output[i] = leftProduct;
            
            // Step B: Agle element ke liye leftProduct ko update kiya (current number multiply karke)
            leftProduct = leftProduct * nums[i];
        }

        // ===========================================
        // PASS 2: Right (Postfix) Product Calculation
        // ===========================================
        // Ab right side se loop chalayenge aur right product ko output array me multiply karte chalenge
        let rightProduct = 1;
        for (let i = n - 1; i >= 0; i--) {
            // Step A: Pehle se maujood left product me right product multiply kiya
            output[i] = output[i] * rightProduct;
            
            // Step B: Pichhle element ke liye rightProduct ko update kiya
            rightProduct = rightProduct * nums[i];
        }

        // Final answer return kar diya
        return output;
    }
}