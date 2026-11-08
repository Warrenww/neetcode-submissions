class MinStack {
    private stack: number[];
    private min: number;

    constructor() {
        this.stack = [];
        this.min = Infinity;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.stack.push(val);
        this.min = Math.min(this.min, val);
    }

    /**
     * @return {void}
     */
    pop(): void {
        const tmp = this.stack.pop();
        if (tmp === this.min) {
            this.min = Math.min(...this.stack)
        }
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack.at(-1);
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.min;
    }
}
