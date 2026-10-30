class Solution {
    isValid(arr: string[]) {
        const filtered = arr.filter((s) => s !== '.');
        return (new Set(filtered)).size === filtered.length;
    }
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        for (let i = 0; i < 9; i ++) {
            // Row
            if (!this.isValid(board[i])) return false;
            // Column
            if (!this.isValid(board.map(b => b[i]).flat())) return false;
            // Grid (i === 5)
            const row = Math.floor(i / 3) * 3; // 3
            const column = (i % 3) * 3; // 6
            const grid = board.slice(row, row + 3).map(r => r.slice(column, column + 3)).flat();
            if (!this.isValid(grid)) return false;
        }
        return true;
    }
}
