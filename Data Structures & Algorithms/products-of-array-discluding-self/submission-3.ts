class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        // const nonZero = nums.filter((n) => n !== 0);
        // const zeroCount = (nums.length - nonZero.length);
        // if (zeroCount > 1) {
        //     return nums.map((_) => 0);
        // }

        // if (zeroCount === 1) {
        //     const remainProducts = nonZero.reduce((acc, curr) => curr * acc, 1);
        //     return nums.map((n) => n === 0 ? remainProducts : 0 );
        // }

        // const totalProducts = nums.reduce((acc, curr) => curr * acc, 1);
        // return nums.map((n) => totalProducts / n);

        const leftProducts: number[] = [];
        const rightProducts: number[] = [];

        nums.reduce((acc, curr) => {
            const prod = acc * curr;
            leftProducts.push(prod);
            return prod;
        }, 1);

        nums.slice().reverse().reduce((acc, curr) => {
            const prod = acc * curr;
            rightProducts.push(prod);
            return prod;
        }, 1);
        rightProducts.reverse();

        return nums.map((n, i) => {
            const left = leftProducts[i - 1] ?? 1;
            const right = rightProducts[i + 1] ?? 1;

            return left * right;
        });
    }
}
