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
        
       // | length (2 char) | position | body |
       let encoded = this.penddingZero(strs.length.toString(), 2);
       let body = '';
       let position: number[] = [];
       let cursor = 0;

       strs.forEach((str) => {
            body += str;
            cursor += str.length;
            position.push(cursor);
       });

       encoded += position.join() + ',';
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
        const positions: number[] = [];

        let buffer = '';
        while (positions.length < length && rest.length) {
            const char = rest.slice(0, 1);
            if (char === ',' && buffer) {
                positions.push(parseInt(buffer));
                buffer = '';
            } else {
                buffer += char;
            }
            rest = rest.slice(1);
        }

        let cursor = 0;
        const result: string[] = [];
        while (positions.length) {
            const pos = positions.shift();
            result.push(rest.slice(cursor, pos));
            cursor = pos;
        }

        return result;
    }
}
