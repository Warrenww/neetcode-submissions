class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        const map: Map<string, number> = new Map();
        let remain = s1.length;

        for (let i = 0; i < s1.length; i++) {
            if (map.has(s1[i])) {
                map.set(s1[i], map.get(s1[i]) + 1);
            } else {
                map.set(s1[i], 1);
            }
        }

        let l = 0;
        for (let r = 0; r < s2.length; r ++) {
           if (!map.has(s2[r])) {
                while(l < r) {
                    if (map.has(s2[l])) {
                        remain ++;
                        map.set(s2[l], map.get(s2[l] + 1));
                    }
                    l ++;
                }
                continue;
           } 

            while(map.get(s2[r]) === 0 && l < r) {
                if (map.has(s2[l])) {
                    remain ++;
                    map.set(s2[l], map.get(s2[l]) + 1);
                }
                l ++;
            }

            map.set(s2[r], map.get(s2[r]) - 1);
            remain --;

            if (remain === 0) {
                 return true;
            }
        }

        return false;
    }
}
