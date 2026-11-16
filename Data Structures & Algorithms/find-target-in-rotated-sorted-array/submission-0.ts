class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let l = 0;
        let r = nums.length - 1;

        while (l < r) {
            const mid = l + Math.floor((r - l) / 2);
            const min = Math.min(nums[l], nums[mid], nums[r]);
            if (min === nums[r]) {
                l = mid + 1;
            } else {
                r = mid;
            }
        }
        
        let l2 = 0;
        let r2 = nums.length;
        const len = nums.length;

        while (l2 < r2) {
            const mid = l2 + Math.floor((r2 - l2) / 2);
            const valM = nums[(mid + l) % len];

            if (valM === target) {
                return (mid + l) % len;
            } else if (valM < target) {
                l2 = mid + 1;
            } else {
                r2 = mid;
            }
        }

        return -1
    }
}
