class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack: string[] = [];
        const map = {
            '(': ')',
            '[': ']',
            '{': '}',
        };

        for (let i = 0; i < s.length; i++) {
            const char = s[i];

            if (map[char] !== undefined) {
                stack.push(char);
            } else {
                const open = stack.pop();
                if (map[open] !== char) {
                    return false;
                }
            }
        }

        return stack.length === 0;
    }
}
