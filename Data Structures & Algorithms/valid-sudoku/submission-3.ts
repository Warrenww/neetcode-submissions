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
        // for (let i = 0; i < 9; i ++) {
        //     // Row
        //     if (!this.isValid(board[i])) return false;
        //     // Column
        //     if (!this.isValid(board.map(b => b[i]).flat())) return false;
        //     // Grid (i === 5)
        //     const row = Math.floor(i / 3) * 3; // 3
        //     const column = (i % 3) * 3; // 6
        //     const grid = board.slice(row, row + 3).map(r => r.slice(column, column + 3)).flat();
        //     if (!this.isValid(grid)) return false;
        // }
        // return true;

        const rowMasks = Array.from({ length: 9 }).map(_ => 0b000000000);
        const columnMasks = Array.from({ length: 9 }).map(_ => 0b000000000);
        const gridMasks = Array.from({ length: 9 }).map(_ => 0b000000000);

        for (let r = 0; r < 9; r ++) {
            for (let c = 0; c < 9; c++) {
                const cell = board[r][c];
                if (cell === '.') continue;
                const mask = 1 << (parseInt(cell) - 1);
                if (rowMasks[r] & mask) return false;
                rowMasks[r] |= mask;
                if (columnMasks[c] & mask) return false;
                columnMasks[c] |= mask;
                if (gridMasks[( r / 3 | 0) * 3 + ( c / 3 | 0)] & mask) return false;
                gridMasks[( r / 3 | 0) * 3 + ( c / 3 | 0)] |= mask;
            }
        }
        return true;
    }
}
