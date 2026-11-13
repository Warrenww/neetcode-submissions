class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        let l_1 = 0;
        let r_1 = matrix.length;

        while (l_1 < r_1) {
            const middle_1 = l_1 + Math.floor((r_1 - l_1) / 2);
            if (matrix[middle_1][0] === target) {
                return true;
            } else if (matrix[middle_1][0] > target) {
                r_1 = middle_1;
            } else if (middle_1 === matrix.length - 1 || matrix[middle_1 + 1][0] > target) {
                let l_2 = 0;
                let r_2 = matrix[middle_1].length;

                while (l_2 < r_2) {
                    const middle_2 = l_2 + Math.floor((r_2 - l_2) / 2);

                    if (matrix[middle_1][middle_2] === target) {
                        return true;
                    } else if (matrix[middle_1][middle_2] < target) {
                        l_2 = middle_2 + 1;
                    } else {
                        r_2 = middle_2;
                    }
                }

                break;
            } else {
                l_1 = middle_1 + 1;
            }
        }

        return false;
    }
}
