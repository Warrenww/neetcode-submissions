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
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root: TreeNode | null,  parentDepth: number = 0): number {
        if (!root) {
            return parentDepth;
        }

        return Math.max(
            this.maxDepth(root.left, parentDepth),
            this.maxDepth(root.right, parentDepth)
        ) + 1;
    }
}
