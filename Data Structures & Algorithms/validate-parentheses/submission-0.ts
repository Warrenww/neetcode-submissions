class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack: string[] = [];

        for (let i = 0; i < s.length; i++) {
            const char = s[i];

            if (['(', '{', '['].includes(s[i])) {
                stack.push(char);
            } else {
                const open = stack.pop();
                if (!['()', '[]', '{}'].includes(open + char)) {
                    return false;
                }
            }
        }

        return stack.length === 0;
    }
}
