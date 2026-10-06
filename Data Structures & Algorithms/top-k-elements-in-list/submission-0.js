class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const countMap= new Map()
        {
           
for (const num of nums) {
    if (countMap.has(num)) {
        // Agar pehle se hai, toh purani value nikal kar 1 add karo
        const oldCount = countMap.get(num);
        countMap.set(num, oldCount + 1);
    } else {
        // Agar pehli baar aaya hai, toh count 1 set karo
        countMap.set(num, 1);
    }

            }
           
        }
        const sortedArray = Array.from(countMap.entries()).sort((a, b) => b[1] - a[1]);

        // Step 3: Pehle 'k' elements ke actual numbers ko result mein daalna
        const result = [];
        for (let i = 0; i < k; i++) {
            result.push(sortedArray[i][0]); // index 0 par number hota hai, index 1 par count
        }

        return result;
    }
}
