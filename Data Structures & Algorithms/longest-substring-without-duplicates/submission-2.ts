class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        if (s.length === 0) {
            return 0;
        }
        
        const map: Map<string, number> = new Map();
        let result: number = 0;
        let l = 0;
        let r = 0;

        for (r = 0; r < s.length; r ++) {
            if (map.has(s[r])) {
                result = Math.max(result, r - l);
                l = Math.max(map.get(s[r]) + 1, l);
            }

            map.set(s[r], r);
        }
        result = Math.max(result, r - l);

        return result;
    }
}
