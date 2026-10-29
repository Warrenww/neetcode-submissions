class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const counts: Map<number, number> = new Map();

        nums.forEach((n) => {
            if (counts.has(n)) {
                counts.set(n, counts.get(n) + 1);
            } else {
                counts.set(n, 1);
            }
        });

        return Array.from(counts.entries())
            .sort((a, b) => b[1] - a[1])
            .slice(0, k)
            .map(([k, v]) => k);
    }
}
