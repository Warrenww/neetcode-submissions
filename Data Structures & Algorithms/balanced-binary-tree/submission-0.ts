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
    // height, isBalance
    dfs(node: TreeNode | null): [number, boolean] {
        if (!node) {
            return [0, true];
        }

        const [heightL, isBL] = this.dfs(node.left);
        const [heightR, isBR] = this.dfs(node.right);
        const height = Math.max(heightL, heightR) + 1;
        const isBalance = isBL && isBR && (Math.abs(heightL - heightR) < 2);

        return [height, isBalance];        
    }
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root: TreeNode | null): boolean {
        return this.dfs(root)[1];
    }
}
