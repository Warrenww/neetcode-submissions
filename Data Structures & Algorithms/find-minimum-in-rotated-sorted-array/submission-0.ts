class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
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
        return nums[l];
    }
}
