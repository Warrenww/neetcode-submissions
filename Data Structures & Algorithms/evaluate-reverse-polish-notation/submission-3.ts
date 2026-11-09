class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const stack: number[] = [];

        while (tokens.length) {
            const token = tokens.shift();
            let a: number, b: number;

            switch(token) {
                case '+':
                     b = stack.pop();
                     a = stack.pop();
                    stack.push(a + b);
                    break;
                case '-':
                    b = stack.pop();
                    a = stack.pop();
                    stack.push(a - b);
                    break;
                case '*':
                    b = stack.pop();
                    a = stack.pop();
                    stack.push(a * b);
                    break;
                case '/':
                    b = stack.pop();
                    a = stack.pop();
                    stack.push((a / b) | 0);
                    break;
                default:
                    stack.push(parseInt(token));
            }
        }

        return stack[0];
    }
}
