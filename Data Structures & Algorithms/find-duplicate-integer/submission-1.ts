class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums: number[]): number {
        let mask = 0n;
        
        for (let i = 0; i < nums.length; i++) {
            const value = 1n << BigInt(nums[i]);
            if (mask & value) return nums[i];
            mask |= value;
        }
    }
}
