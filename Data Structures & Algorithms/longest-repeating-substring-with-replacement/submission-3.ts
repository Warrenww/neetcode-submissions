type SlideWindow = {
    l: number;
    r: number;
    difCharPos: number[];
}

class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        const map: Map<string, SlideWindow> = new Map();
        let maxSub = 0;

        for (let i = 0; i < s.length; i++) {
            const char = s[i];
            if (!map.has(char)) {
                map.set(char, {
                    l: i,
                    r: i,
                    difCharPos: [],
                });
            }

            Array.from(map.entries()).forEach(([c, w]) => {
                if (char === c) {
                    w.r ++;
                } else if (w.difCharPos.length < k) {
                    w.difCharPos.push(i);
                    w.r ++;
                } else {
                    maxSub = Math.max(maxSub, w.r - w.l);

                    if (w.difCharPos.length) {
                        w.l = w.difCharPos.shift() + 1;
                        w.difCharPos.push(i);
                        w.r ++;
                    } else {
                        map.delete(c);
                    }
                }
            });
        }

        Array.from(map.entries()).forEach(([c, w]) => {
            let remainLife = Math.max(0, k - w.difCharPos.length);
            while (remainLife > 0 && w.l > 0) {
                w.l --;
                remainLife --;
            }
            maxSub = Math.max(maxSub, w.r - w.l);
        });

        return maxSub;
    }
}
