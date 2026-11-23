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
     * @return {number[]}
     */
    rightSideView(root: TreeNode | null): number[] {
        const queue: [TreeNode, number][] = [];
        const result: number[] = []

        if (!root) {
            return [];
        }

        queue.push([root, 0]);
        while (queue.length) {
            const [node, height] = queue.shift();
            result[height] = node.val;

            if (node.left) {
                queue.push([node.left, height + 1]);
            }
            if (node.right) {
                queue.push([node.right, height + 1]);
            }
        }

        return result;
    }
}
