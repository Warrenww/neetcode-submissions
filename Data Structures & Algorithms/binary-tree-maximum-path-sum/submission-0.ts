/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    private result = -Infinity;
    calcSum(root: TreeNode | null): number {
        if (!root) {
             return 0;
        }

        const fromLeft = root.left ? this.calcSum(root.left) : 0;
        const fromRight = root.right ? this.calcSum(root.right) : 0;

        this.result = Math.max(
            this.result,
            root.val,
            root.val + fromLeft,
            root.val + fromRight,
            root.val + fromRight + fromLeft,
        );

        return Math.max(
            root.val,
            root.val + fromLeft,
            root.val + fromRight,
        );
    }
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxPathSum(root: TreeNode | null): number {
        this.calcSum(root);
        return this.result;
    }
}
