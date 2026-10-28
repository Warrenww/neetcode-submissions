class Solution {
    hash(str: string): string {
        const arr = Array.from({ length: 26 }).map((x) => 0);

        for(let i = 0; i < str.length; i++) {
            const idx = str.charCodeAt(i) - 'a'.charCodeAt(0);
            arr[idx] += 1;
        }

        return arr.join('_');
    }
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map: Map<string, string[]> = new Map();

        for (let i = 0; i < strs.length; i++) {
            const hashed = this.hash(strs[i]);

            if (map.has(hashed)) {
                map.set(hashed, map.get(hashed)!.concat([strs[i]]));
            } else {
                map.set(hashed, [strs[i]]);
            }
        }

        return Array.from(map.values());
    }
}
