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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(
        root: TreeNode | null,
        p: TreeNode | null,
        q: TreeNode | null,
    ) {
        const max = Math.max(p.val, q.val);
        const min = Math.min(p.val, q.val);

        let node: TreeNode = root;
        while (true) {
            const val = node.val;
            if (node.val < min) {
                node = node.right;
            } else if (node.val > max) {
                node = node.left;
            } else {
                return node;
            }
        }

        return null;
    }
}
