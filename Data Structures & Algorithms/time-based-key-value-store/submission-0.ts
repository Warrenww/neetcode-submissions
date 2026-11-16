class TimeMap {
    private keyStore: Map<string, ([number, string])[]>;

    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key: string, value: string, timestamp: number): void {
        const exist = this.keyStore.get(key) ?? [];
        exist.push([timestamp, value]);
        this.keyStore.set(key, exist);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key: string, timestamp: number): string {
        const values = this.keyStore.get(key);
        if (!values || values.length === 0) {
            return ""
        }
        for (let i = values.length - 1; i >= 0; i--) {
            if (values[i][0] <= timestamp) {
                return values[i][1];
            }
        }
        return "";
    }
}
