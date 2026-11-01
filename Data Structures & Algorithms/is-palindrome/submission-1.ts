class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            if (!s[left].match(/[0-9A-Za-z]/)) {
                left += 1;
                continue;
            }
            if (!s[right].match(/[0-9A-Za-z]/)) {
                right -= 1;
                continue;
            }

            if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
            left += 1;
            right -= 1;
        }

        return true;
    }
}
