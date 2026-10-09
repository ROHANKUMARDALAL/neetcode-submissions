class Solution {
    countBits(n) {
        const output = [];

        // 0 se n tak loop
        for (let i = 0; i <= n; i++) {
            let num = i;
            let count = 0;

            // 2 se divide karte hue 1s count karna (Aapka remainder logic)
            while (num > 0) {
                if (num % 2 === 1) {
                    count++; // Remainder 1 mila toh ginti badha li
                }
                num = Math.floor(num / 2); // 2 se divide kiya
            }

            output.push(count); // Direct count push kiya (No HashMap needed!)
        }

        return output;
    }
}