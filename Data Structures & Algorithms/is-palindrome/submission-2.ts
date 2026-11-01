class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const filtered = s.split('')
            .filter(c => c.match(/[0-9A-Za-z]/))
            .map(c => c.toLowerCase());
        
        for (let i = 0; i < filtered.length / 2; i ++) {
            if (filtered[i] !== filtered[filtered.length - 1 - i]) {
                return false;
            }
        }

        return true;
    }
}
