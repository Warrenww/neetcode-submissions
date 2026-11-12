class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        const hp: Map<string, number> = new Map();
        let remain = t.length;
        let result = "";

        // Initial HP map for t
        for (let i = 0; i < t.length; i ++) {
            if (hp.has(t[i])) {
                hp.set(t[i], hp.get(t[i]) + 1);
            } else {
                hp.set(t[i], 1);
            }
        }

        let l = 0;
        // Move to the first char
        while (!hp.has(s[l]) && l < s.length) {
            l ++;
        }
        for (let r = l; r < s.length; r ++) {
            if (!hp.has(s[r])) {
                continue;
            }

            if (hp.get(s[r]) > 0) {
                remain --;
            }
            hp.set(s[r], hp.get(s[r]) - 1);

            if (remain === 0) {
                // Update result if smaller
                if (result === "" || result.length > (r - l + 1)) {
                    result = s.substring(l, r + 1);
                }

                // Restore HP for first letter
                while (l < r) {
                    if (!hp.has(s[l])) {
                        if (remain <= 0 && result.length > (r - l + 1)) {
                            result = s.substring(l, r + 1);
                        }
                        l++;
                        continue;
                    }
                    if (remain > 0) {
                        break;
                    }

                    if (result.length > (r - l + 1)) {
                        result = s.substring(l, r + 1);
                    } 
                    
                    if (hp.get(s[l]) >= 0) {
                        remain ++;
                    } 

                    hp.set(s[l], hp.get(s[l]) + 1);
                    l++;
                }
            }
        }

        return result;
    }
}
