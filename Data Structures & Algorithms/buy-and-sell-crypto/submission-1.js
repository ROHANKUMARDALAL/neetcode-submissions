class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit=0;
       let left=0;
       let right=1;
       while(right<prices.length){
        if(prices[right]>prices[left]){
       const currentProfit=prices[right]-prices[left]
       if(currentProfit>maxProfit){
        maxProfit=currentProfit
       }     
        }
        else{
            left=right
        }
       right++;
       }
       return maxProfit;
    }
}
