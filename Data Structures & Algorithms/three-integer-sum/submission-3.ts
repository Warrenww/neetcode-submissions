class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const sorted = nums.slice().sort((a, b) => (a - b));
        const results: number[][] = [];

        for (let i = 0; i < sorted.length; i++) {
            let l = i + 1;
            let r = sorted.length - 1;
            if (sorted[i] > 0) break;
            
            while (l < r) {
                if (sorted[l] + sorted[r] + sorted[i] > 0) {
                    // If too large, move the right cursor
                    r --;
                    continue;
                } 
                if (sorted[l] + sorted[r] + sorted[i] < 0) {
                    // If too small, move the left cursor
                    l ++;
                    continue;
                }  

                results.push([sorted[i], sorted[l], sorted[r]]);

                
                // Skip the same number
                while (sorted[l + 1] === sorted[l]) {
                    l ++;
                }
                while (sorted[r - 1] === sorted[r]) {
                    r --;
                }

                l ++;
                r --;
            }

            while(sorted[i + 1] === sorted[i]) {
                i ++;
            }
        }

        return results;
    }
}
