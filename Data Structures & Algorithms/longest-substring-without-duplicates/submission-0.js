class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // Unique characters ko track karne ke liye Set
        const charSet = new Set();

        let left = 0;
        let maxLength = 0;

        // right pointer shuru se aakhir tak chalega
        for (let right = 0; right < s.length; right++) {
            const currentChar = s[right];

            // Step 1: Agar character pehle se Set mein hai (Duplicate mila),
            // toh left se characters tab tak delete karte jao jab tak duplicate na hat jaye
            while (charSet.has(currentChar)) {
                charSet.delete(s[left]);
                left++; // Left pointer ko aage badhao (window chhoti karo)
            }

            // Step 2: Naye character ko window (Set) mein add karo
            charSet.add(currentChar);

            // Step 3: Current window ki length nikaalo aur maxLength ko update karo
            // Current window ki length hoti hai: (right - left + 1)
            const currentWindowLength = right - left + 1;
            maxLength = Math.max(maxLength, currentWindowLength);
        }

        return maxLength;
    }
}