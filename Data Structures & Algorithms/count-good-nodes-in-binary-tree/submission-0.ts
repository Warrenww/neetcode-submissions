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
    private result = 0;

    dfs (node: TreeNode, currentMax: number) {
        if (node.val >= currentMax) {
            this.result ++;
        }

        if (node.left) {
            this.dfs(node.left, Math.max(currentMax, node.val))
        }

        if (node.right) {
            this.dfs(node.right, Math.max(currentMax, node.val))
        }
    }
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    goodNodes(root: TreeNode | null): number {
        if (!root) {
            return 0;
        }

        this.dfs(root, -Infinity);

        return this.result;
    }
}
