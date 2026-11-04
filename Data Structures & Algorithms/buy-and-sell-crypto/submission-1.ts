class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let min = Infinity;
        let maxP = 0;
        for (let i = 0; i < prices.length; i ++) {
            const p = prices[i] - min;
            maxP = Math.max(p, maxP);
            min = Math.min(prices[i], min);
        }
        
        return maxP;
    }
}
