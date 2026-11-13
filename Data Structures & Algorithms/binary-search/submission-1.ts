class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let l = 0;
        let r = nums.length;

        while (l < r) {
            const middle = l + Math.floor((r - l) / 2);
            const value = nums[middle];

            if (value === target) {
                return middle;
            } else if (value < target) {
                l = middle + 1;
            } else {
                r = middle;
            }
        }

        return -1;
    }
}
