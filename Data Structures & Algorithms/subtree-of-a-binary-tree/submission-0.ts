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
    isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
        if (!p && !q) { 
            return true;
        }
        
        if (p?.val !== q?.val) {
            return false;
        }

        return this.isSameTree(p?.left ?? null, q?.left ?? null) && this.isSameTree(p?.right ?? null, q?.right ?? null);
    }
    /**
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
        const queue: TreeNode[] = [];
        queue.push(root);

        while (queue.length) {
            const node = queue.shift();
            if (node.val === subRoot.val && this.isSameTree(node, subRoot)) {
                return true;
            }

            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }

        return false;
    }
}
