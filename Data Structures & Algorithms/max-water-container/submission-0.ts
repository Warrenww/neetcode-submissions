class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let left = 0;
        let right = heights.length - 1;
        let max = -Infinity;

        while (left < right) {
            const area = (right - left) * Math.min(heights[left], heights[right]);

            max = Math.max(area, max);
            if (heights[left] < heights[right]) {
                left ++;
            } else {
                right --;
            }
        }

        return max;
    }
}
