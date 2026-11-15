class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        let r = Math.max(...piles);
        let l = 1;

        while (l < r) {
            const middle = l + Math.floor((r - l) / 2);
            const time = piles.reduce((total, pile) => total + Math.ceil(pile / middle), 0);

            if (time <= h) {
                r = middle;
            } else {
                l = middle + 1;
            }

        }

        return l + Math.floor((r - l) / 2);
    }
}
