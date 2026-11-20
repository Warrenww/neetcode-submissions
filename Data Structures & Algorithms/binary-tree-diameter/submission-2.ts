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
    maxDepth(root: TreeNode | null,  parentDepth: number = 0): number {
        if (!root) {
            return parentDepth;
        }

        return Math.max(
            this.maxDepth(root.left, parentDepth),
            this.maxDepth(root.right, parentDepth)
        ) + 1;
    }
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root: TreeNode | null): number {
        if (!root) {
            return 0;
        }

        const left = this.diameterOfBinaryTree(root.left);
        const right = this.diameterOfBinaryTree(root.right);
        const height = this.maxDepth(root.left) + this.maxDepth(root.right);
        
        return Math.max(left, right, height);
    }
}
