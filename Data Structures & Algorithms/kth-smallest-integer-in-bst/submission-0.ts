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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root: TreeNode | null, k: number): number {
        // Traversal order left -> self -> right
        const stack: [TreeNode, boolean][] = []; // [node, visited]
        const result: number[] = [];

        stack.push([root, false]);

        while (stack.length !== 0 && result.length !== k) {
            const [top, visited] = stack.at(-1)!;

            if (!visited && top.left) {
                stack.at(-1)[1] = true;
                stack.push([top.left, false]);
                continue;
            }

            stack.pop();
            result.push(top.val);
            
            if (top.right) {
                stack.push([top.right, false]);
            }
        }

        return result.at(-1);
    }
}
