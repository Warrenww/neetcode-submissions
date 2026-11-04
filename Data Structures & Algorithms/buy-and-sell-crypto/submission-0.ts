class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        const minPrice: number[] = [];

        let min = Infinity;
        for (let i = 0; i < prices.length; i ++) {
            minPrice.push(min);
            min = Math.min(min, prices[i]);
        }

        const bestProfit = prices.map((p, idx) => (p - minPrice[idx]));

        return Math.max(...bestProfit, 0);
    }
}
