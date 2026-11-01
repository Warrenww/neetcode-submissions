class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let l = 0;
        let r = numbers.length - 1;
        let sum: number = NaN;

        while (l < r) {
            sum = numbers[l] + numbers[r];
            if (sum < target) {
                l ++;
            } else if (sum > target) {
                r --;
            } else {
                return [l + 1, r + 1];
            }
        }

    }
}
