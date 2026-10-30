class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const nonZero = nums.filter((n) => n !== 0);
        const zeroCount = (nums.length - nonZero.length);
        if (zeroCount > 1) {
            return nums.map((_) => 0);
        }

        if (zeroCount === 1) {
            const remainProducts = nonZero.reduce((acc, curr) => curr * acc, 1);
            return nums.map((n) => n === 0 ? remainProducts : 0 );
        }

        const totalProducts = nums.reduce((acc, curr) => curr * acc, 1);

        return nums.map((n) => totalProducts / n);
    }
}
