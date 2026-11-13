class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights: number[]): number {
        let monoStack: [number, number][] = []; // [index, height]
        let result = 0;
        
        for (let i = 0; i < heights.length; i++) {
            let start = i;
            const height = heights[i];

            while (monoStack.length && monoStack.at(-1)[1] > height) {
                const [index, topH] = monoStack.pop()!;
                const area = topH * (i - index);
                result = Math.max(result, area);
                start = index;
            }
            if (monoStack.at(-1)?.[1] === height) {
                continue;
            }

            monoStack.push([start, height]);
        }

        while (monoStack.length) {
            const [index, topH] = monoStack.pop()!;
            const area = topH * (heights.length - index);
            result = Math.max(result, area);
        }


        return result;
    }

}
