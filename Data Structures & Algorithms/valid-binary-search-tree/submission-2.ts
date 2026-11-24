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
     * @return {boolean}
     */
    isValidBST(root: TreeNode | null, min = -Infinity, max = Infinity ): boolean {
        if (!root) {
            return true;
        }

        if (root.val >= max || root.val <= min) {
            return false;
        }

        return this.isValidBST(root.left, min, Math.min(max, root.val)) && this.isValidBST(root.right, Math.max(root.val, min), max);
    }
}
