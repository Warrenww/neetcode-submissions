class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        const cars = Array.from(position).map((_, i) => [position[i], speed[i]]);
        const sortedCars = cars. sort((a, b) => (a[0] - b[0]));
        const eat = sortedCars.map((c) => (target - c[0]) / c[1]);

        const monoStack: number[] = [];
        eat.forEach((t) => {
            while(monoStack.at(-1) <= t) {
                monoStack.pop();
            }

            monoStack.push(t);
        });

        return monoStack.length;
    }
}
