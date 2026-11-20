class LRUCache {
    private capacity: number;
    private cache: Map<number, number>;
    private accessLog: Set<number>;
    /**
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.capacity = capacity;
        this.cache = new Map();
        this.accessLog = new Set();
    }

    private updateAccessLog(key: number): void {
        // If already in set, remove it first
        if (this.accessLog.has(key)) {
            this.accessLog.delete(key);
        }

        // Add log to end
        this.accessLog.add(key);

        if (this.accessLog.size > this.capacity) {
            const keyToDel = Array.from(this.accessLog.values()).shift();
            this.cache.delete(keyToDel);
            this.accessLog.delete(keyToDel);
        }
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        if (this.cache.has(key)) {
            this.updateAccessLog(key);
            return this.cache.get(key);
        }

        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        this.cache.set(key, value);
        this.updateAccessLog(key);
    }
}
