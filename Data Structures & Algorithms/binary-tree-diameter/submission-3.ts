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
    // height, maxDiameter
    dfs(root: TreeNode | null): [number, number] {
        if (!root) {
            return [0, 0]
        }
        const [leftH, leftD] = this.dfs(root.left);
        const [rightH, rightD] = this.dfs(root.right);
        const height = Math.max(leftH, rightH) + 1;
        const diameter = Math.max(leftD, rightD, leftH + rightH);

        return [height, diameter];
    }
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root: TreeNode | null): number {

        return this.dfs(root)[1];
    }
}
