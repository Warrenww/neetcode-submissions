class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if (nums.length === 0) {
             return 0;
        }

        const uniqueNums = new Set(nums);
        let maxSeq = 0;
        Array.from(uniqueNums.values()).forEach(v => {
            if (!uniqueNums.has(v - 1)) {
                let i = v;
                while (uniqueNums.has(i)) {
                    i ++;
                }
                maxSeq = Math.max(maxSeq, i - v);
            }
        });

        return maxSeq;
    }
}
