class Solution {
    penddingZero(str: string, n: number) {
        if (str.length > n) return str.length.toString();
        else return Array
            .from({ length: n - str.length })
            .map(_ => '0')
            .join('') + str;
    }

    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        if (strs.length === 0) {
            return ""
        }
        
       // | length (2 char) | each length | body |
       let encoded = this.penddingZero(strs.length.toString(), 2);
       let body = '';
       let lengths: number[] = [];

       strs.forEach((str) => {
            body += str;
            lengths.push(str.length);
       });

       encoded += lengths.join() + ',';
       encoded += body;

       return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        if (str === "") {
            return [];
        }

        const length = parseInt(str.slice(0, 2));
        let rest = str.slice(2);
        const lengths: number[] = [];

        let buffer = '';
        while (lengths.length < length && rest.length) {
            const char = rest.slice(0, 1);
            if (char === ',' && buffer) {
                lengths.push(parseInt(buffer));
                buffer = '';
            } else {
                buffer += char;
            }
            rest = rest.slice(1);
        }

        const result: string[] = [];
        while (lengths.length) {
            const len = lengths.shift();
            result.push(rest.slice(0, len));
            rest = rest.slice(len);
        }

        return result;
    }
}
