class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const monoStack: number[] = [];
        const results: number[] = [];

        for (let i = temperatures.length - 1; i >= 0; i--) {
            const temp = temperatures[i];

            while (monoStack.at(-1) && temperatures[monoStack.at(-1)] <= temp) {
                monoStack.pop();
            }
            results[i] = monoStack.at(-1) ? monoStack.at(-1) - i : 0;
            monoStack.push(i);
        }

        return results;
    }
}
